import React from 'react';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

const Description: React.FC<{ item: ItemInterface }> = ({ item, children }) => (
    <div>
        <h3>{item.title}</h3>
        <div>
            <p>
                &euro;
                {item.price}
            </p>
            <p>{item.description}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
);

export default Description;
