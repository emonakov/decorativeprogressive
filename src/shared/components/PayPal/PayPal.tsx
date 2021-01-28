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

const BuyButton: React.FC<{ item: ItemInterface }> = ({ item: { title, price, id } }) => ( // eslint-disable-line
    <PayPalContainer>
        <PayPalScriptProvider
            options={{
                'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID as string,
                currency: 'EUR',
            }}
        >
            <PayPalButtons
                fundingSource={FUNDING.PAYPAL}
                // eslint-disable-next-line
                onApprove={(data, actions) => actions.order.capture({ test: 'test' }).then((details) => console.log(details))}
                createOrder={(data, actions) => actions.order.create({ // eslint-disable-line
                    //     purchase_units: [{
                    //         amount: {
                    //             // currency_code: 'GBP',
                    //             value: String(price / 100),
                    //         },
                    //         items: [{
                    //             name: title,
                    //             unit_amount: {
                    //                 // currency_code: 'GBP',
                    //                 value: String(price / 100),
                    //             },
                    //             quantity: '1',
                    //             sku: String(id),
                    //             category: 'PHYSICAL_GOODS',
                    //         }],
                    //     }],
                    purchase_units: [{
                        amount: {
                            currency_code: 'EUR',
                            value: String((price / 100).toFixed(2)),
                            // eslint-disable-next-line
                            // @ts-ignore
                            breakdown: {
                                item_total: { currency_code: 'EUR', value: String((price / 100).toFixed(2)) },
                                tax_total: { currency_code: 'EUR', value: '0' },
                            },
                        },
                        // eslint-disable-next-line
                        // @ts-ignore
                        items: [{
                            name: title,
                            quantity: '1',
                            unit_amount: { currency_code: 'EUR', value: String((price / 100).toFixed(2)) },
                            sku: String(id),
                        }],
                    }],
                })}
            />
        </PayPalScriptProvider>
    </PayPalContainer>
);

export default BuyButton;
