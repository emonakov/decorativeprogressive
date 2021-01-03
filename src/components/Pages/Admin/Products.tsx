import React from 'react';

import ContentWrapper from '../../../shared/components/ContentWrapper';
import LinkTo from '../../../shared/components/LinkTo';

const Products: React.FC = () => (
    <ContentWrapper>
        <h1>Products</h1>
        <LinkTo to="/admin">ADMIN MAIN</LinkTo>
    </ContentWrapper>
);

export default Products;
