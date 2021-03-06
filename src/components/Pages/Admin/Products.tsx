import React from 'react';
import styled from 'styled-components';

import Img from '../../../shared/components/CloudinaryImage';
import ContentWrapper from '../../../shared/components/ContentWrapper';
import LinkTo from '../../../shared/components/LinkTo';
import AdminMenu from '../../../shared/components/AdminMenu';
import Decorative from '../../../shared/components/Decorative';

import { useGetProductsAdmin } from '../../../services/products';

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`;

const ProdImg = styled(Img)`
    opacity: 0.9;
    /* border-bottom: ${({ theme }) => `${theme.menuBorderStyle} ${theme.menuBorderColor}`}; */

    &:hover {
        opacity: 1;
    }
`;

const P = styled.p`
    text-align: center;
    margin: ${({ theme }) => theme.paddingMd} 0;
`;

const Products: React.FC = () => {
    const { adminItems: items, loading } = useGetProductsAdmin();

    return !loading && items
        ? (
            <ContentWrapper>
                <AdminMenu pageTitle="Edit products" />
                <ContentWrapper>
                    <Gallery>
                        {items && items.map(({
                            title = 'EMPTY PRODUCT',
                            id,
                            images,
                        }) => (
                            <Container key={id}>
                                <LinkTo to={`/admin/products/${id}`}>
                                    {images && <ProdImg publicId={images[0]} width="300" crop="scale" />}
                                    <Decorative>
                                        <P>{title}</P>
                                    </Decorative>
                                </LinkTo>
                            </Container>
                        ))}
                    </Gallery>
                </ContentWrapper>
            </ContentWrapper>
        ) : null;
};

export default Products;
