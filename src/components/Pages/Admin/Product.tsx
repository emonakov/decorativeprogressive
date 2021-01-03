import React from 'react';
import ContentWrapper from '../../../shared/components/ContentWrapper';

import { useGetProduct } from '../../../services/products';

interface ProductProps {
    match: { params: { id: string } };
}

const Product: React.FC<ProductProps> = ({ match }) => {
    const { loading, item } = useGetProduct(match.params.id);

    return (!loading && item && (
        <ContentWrapper>
            <h1>{item.title}</h1>
        </ContentWrapper>
    )) || null;
};

export default Product;
