import React from 'react';
import styled from 'styled-components';
import {
    PayPalScriptProvider,
    PayPalButtons,
    FUNDING,
} from '@paypal/react-paypal-js';

import { ItemInterface } from '../../../Interfaces/ProductItemInterface';

const PayPalContainer = styled.div`
    margin: ${({ theme }) => theme.paddingMd} 0;
`;

const BuyButton: React.FC<{ item: ItemInterface }> = ({ item: { title, price, id } }) => (
    <PayPalContainer>
        <PayPalScriptProvider
            options={{
                'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID as string,
                currency: 'EUR',
            }}
        >
            <PayPalButtons
                fundingSource={FUNDING.PAYPAL}
                eslint-disable-next-line
                onApprove={(data, actions) => actions
                    .order.capture({ test: 'test' }).then((details) => console.log(details))}
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
        </PayPalScriptProvider>
    </PayPalContainer>
);

export default BuyButton;
