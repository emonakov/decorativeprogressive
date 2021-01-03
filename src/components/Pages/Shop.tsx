import React from 'react';
import styled from 'styled-components';
import 'react-placeholder/lib/reactPlaceholder.css';

import { ShopPageHero } from '../Heroes';
import ContentWrapper from '../../shared/components/ContentWrapper';
import Img from '../../shared/components/CloudinaryImage';
import Decorative from '../../shared/components/Decorative';
// import getShopContent from '../../mocks/shop';
import LinkToUnstyled from '../../shared/components/LinkTo';
import { useGetProducts } from '../../services/products';

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

const ProdImg = styled(Img)`
    opacity: 0.9;
    /* border-bottom: ${({ theme }) => `${theme.menuBorderStyle} ${theme.menuBorderColor}`}; */

    &:hover {
        opacity: 1;
    }
`;

const LinkTo = styled(LinkToUnstyled)`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`;

const ShopPage: React.FC = ({ children }) => {
    const { loading, items } = useGetProducts();

    return (!loading && (
        <>
            <ShopPageHero />
            <ContentWrapper>
                <Gallery>
                    {items && items.map(({
                        title,
                        id,
                        images,
                        productAssets,
                    }) => (
                        <div key={id}>
                            <LinkTo to={`/shop/item/${id}`}>
                                <ProdImg publicId={`${productAssets}${images.main}`} width="300" crop="scale" />
                                <Decorative>
                                    <P>{title}</P>
                                </Decorative>
                            </LinkTo>
                        </div>
                    ))}
                </Gallery>
            </ContentWrapper>
            {children}
        </>
    )) || null;
};

export default ShopPage;
