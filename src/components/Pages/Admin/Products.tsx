import React from 'react';

import LinkTo from '../../../shared/components/LinkTo';

const Products: React.FC = () => (
    <>
        <h1>Products</h1>
        <LinkTo to="/admin"><button type="button">ADMIN MAIN</button></LinkTo>
    </>
);

export default Products;
