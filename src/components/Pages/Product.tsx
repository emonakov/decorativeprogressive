import React, { useReducer, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ShopPageHero } from '../Heroes';
import ContentWrapper from '../../shared/components/ContentWrapper';
import Img from '../../shared/components/Img';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

import getShopContent from '../../mocks/shop';
import LinkTo from '../../shared/components/LinkTo';

interface ProductProps {
    match: { params: { id : number } };
}

interface State {
    loading: boolean;
    item?: ItemInterface;
    errors?: string[];
}

interface Action {
    type: string;
    payload?: object;
}

const initialContent = {
    loading: false,
    errors: [],
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'CONTENT_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'CONTENT_SUCCESS':
            console.log(action);
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case 'CONTENT_FAILURE':
            return {
                ...state,
                loading: false,
                errors: ['something went wrong'],
            };
        default:
            return state;
    }
};

const Gallery = styled.section`
    display: grid;
    grid-gap: ${({ theme }) => theme.contentPadding};
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const P = styled.p`
    text-align: center;
    margin: 0 0 ${({ theme }) => theme.paddingMd};
`;

const ProdImg = styled(Img)`
    opacity: 0.9;
    border-bottom: ${({ theme }) => `${theme.menuBorderStyle} ${theme.menuBorderColor}`};

    &:hover {
        opacity: 1;
    }
`;

const ProductPage: React.FC<ProductProps> = ({ children, match }) => {
    const [state, dispatch] = useReducer(reducer, initialContent);
    const getShopContentCallback = useCallback(() => (getShopContent()), []);
    useEffect(() => {
        dispatch({ type: 'CONTENT_REQUEST' });
        (async () => {
            const data = await getShopContentCallback();
            const product = data.items.find(item => item.id === Number(match.params.id));
            dispatch({ type: 'CONTENT_SUCCESS', payload: product });
        })();
    }, [dispatch, getShopContentCallback, match]);

    const { loading, item } = state;

    return (!loading && item && (
        <>
            <ShopPageHero />
            <ContentWrapper>
                <Gallery>
                    <LinkTo to={`/shop/item/${item.id}`}>
                        <ProdImg
                            src={`${process.env.PUBLIC_URL}/assets/products/product_${item.id}/main.jpg`}
                            alt=""
                        />
                        <P>{item.title}</P>
                    </LinkTo>
                </Gallery>
            </ContentWrapper>
            {children}
        </>
    )) || null;
};

export default ProductPage;
