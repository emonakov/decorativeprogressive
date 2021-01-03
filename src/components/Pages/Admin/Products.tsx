import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../../shared/components/ContentWrapper';
import LinkTo from '../../../shared/components/LinkTo';
import Decorative from '../../../shared/components/Decorative';

import { useGetProducts } from '../../../services/products';

const Gallery = styled.section`
    display: grid;
    grid-gap: ${({ theme }) => theme.contentPadding};
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const P = styled.p`
    text-align: center;
    margin: ${({ theme }) => theme.paddingMd} 0;
`;

const Products: React.FC = () => {
    const { items, loading } = useGetProducts();

    return !loading && items
        ? (
            <ContentWrapper>
                <h1>Products admin</h1>
                <LinkTo to="/admin">ADMIN MAIN</LinkTo>
                <ContentWrapper>
                    <Gallery>
                        {items && items.map(({
                            title,
                            id,
                        }) => (
                            <div key={id}>
                                <LinkTo to={`/admin/products/${id}`}>
                                    <Decorative>
                                        <P>{title}</P>
                                    </Decorative>
                                </LinkTo>
                            </div>
                        ))}
                    </Gallery>
                </ContentWrapper>
            </ContentWrapper>
        ) : null;
};

export default Products;
