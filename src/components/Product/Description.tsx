import React from 'react';
import { Box } from '@modulz/radix';
import parse from 'html-react-parser';

import { ItemInterface } from '../../Interfaces/ProductItemInterface';

const formatPrice = (price: number) => (price / 100)
    .toLocaleString('en-US', { style: 'currency', currency: 'EUR', maximumSignificantDigits: 2 });

const Description: React.FC<{ item: ItemInterface }> = ({ item, children }) => (
    <div>
        <h3>{item.title}</h3>
        <div>
            <p>
                {formatPrice(item.price)}
            </p>
            <Box>{parse(item.description)}</Box>
        </div>
        <div>
            {children}
        </div>
    </div>
);

export default Description;
