import React, {
    useReducer,
    useCallback,
    useEffect,
} from 'react';
import styled from 'styled-components';
import 'react-placeholder/lib/reactPlaceholder.css';

import { ShopPageHero } from '../Heroes';
import ContentWrapper from '../../shared/components/ContentWrapper';
import Img from '../../shared/components/CloudinaryImage';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

import getShopContent from '../../mocks/shop';
import LinkToUnstyled from '../../shared/components/LinkTo';

interface State {
    loading: boolean;
    items: ItemInterface[];
    errors?: string[];
}

interface Action {
    type: string;
    payload?: Record<string, unknown>;
}

const initialContent = {
    loading: false,
    images: {},
    items: [],
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

const LinkTo = styled(LinkToUnstyled)`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`;

const ShopPage: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialContent);
    const getShopContentCallback = useCallback(() => (getShopContent()), []);
    useEffect(() => {
        dispatch({ type: 'CONTENT_REQUEST' });
        (async () => {
            const data = await getShopContentCallback();
            dispatch({ type: 'CONTENT_SUCCESS', payload: data });
        })();
    }, [dispatch, getShopContentCallback]);

    const { loading, items } = state;

    return (!loading && (
        <>
            <ShopPageHero />
            <ContentWrapper>
                <Gallery>
                    {items.map(({
                        title,
                        id,
                        images,
                        productAssets,
                    }) => (
                        <div key={id}>
                            <LinkTo to={`/shop/item/${id}`}>
                                <ProdImg publicId={`${productAssets}${images.main}`} width="300" crop="scale" />
                                <P>{title}</P>
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
