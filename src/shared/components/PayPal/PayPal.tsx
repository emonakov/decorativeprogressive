import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    usePayPalScriptReducer,
    PayPalButtons,
    FUNDING,
} from '@paypal/react-paypal-js';
import Loading from 'react-loading';

import Success from './Success';
import { boughtProduct } from '../../../services/products';
import { ItemInterface } from '../../../Interfaces/ProductItemInterface';
import { PaypalOrderInterface } from '../../../Interfaces/PaypalOrderInterface';

const PayPalContainer = styled.div`
    margin: ${({ theme }) => theme.paddingMd} 0;
`;

const BuyButton: React.FC<{ item: ItemInterface }> = ({
    item: {
        title,
        price,
        id,
        inStock,
    },
}) => {
    const [isBought, setIsBought] = useState(false);
    const [orderData, setOrderData] = useState<PaypalOrderInterface>();
    const [stockBug, setStockBug] = useState<string>();
    const { buttonColor } = useContext(ThemeContext);
    const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();

    return (
        <PayPalContainer>
            {isPending && <Loading type="spin" color={buttonColor} />}
            {!isBought && inStock && isResolved && (
                <PayPalButtons
                    fundingSource={FUNDING.PAYPAL}
                    onApprove={(data, actions) => actions
                        .order.capture()
                        .then((details) => {
                            const orderDetails = { ...details } as unknown as PaypalOrderInterface;
                            setOrderData(orderDetails);

                            return boughtProduct(id);
                        })
                        .then(() => setIsBought(true))
                        .catch(() => setStockBug('stock was not updated'))}
                    createOrder={(data, actions) => actions.order.create({
                        purchase_units: [{
                            amount: {
                                currency_code: 'EUR',
                                value: String((price / 100).toLocaleString()),
                                breakdown: {
                                    item_total: { currency_code: 'EUR', value: String((price / 100).toLocaleString()) },
                                    tax_total: { currency_code: 'EUR', value: '0' },
                                    shipping: { currency_code: 'EUR', value: '0' },
                                    handling: { currency_code: 'EUR', value: '0' },
                                    insurance: { currency_code: 'EUR', value: '0' },
                                    shipping_discount: { currency_code: 'EUR', value: '0' },
                                    discount: { currency_code: 'EUR', value: '0' },
                                },
                            },
                            items: [{
                                name: title,
                                quantity: '1',
                                unit_amount: { currency_code: 'EUR', value: String((price / 100).toLocaleString()) },
                                sku: String(id),
                                category: 'PHYSICAL_GOODS',
                            }],
                        }],
                    })}
                />
            )}
            {!inStock && <h4>Product is no longer available</h4>}
            {isRejected && <h4>Payment isn&apos;t possible right now</h4>}
            {isBought && <Success data={orderData} />}
            {stockBug && <pre>{stockBug}</pre>}
        </PayPalContainer>
    );
};

export default BuyButton;
