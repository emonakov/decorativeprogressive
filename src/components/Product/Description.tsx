import React from 'react';
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
            <p>{item.description}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
);

export default Description;
