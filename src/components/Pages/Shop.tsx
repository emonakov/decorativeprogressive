import React, {
    useReducer,
    useCallback,
    useEffect,
    useState,
} from 'react';
import styled from 'styled-components';
import { useDebounce } from 'react-use';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import { ShopPageHero } from '../Heroes';
import ContentWrapper from '../../shared/components/ContentWrapper';
import Img from '../../shared/components/Img';
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
    const [ready, setReady] = useState<{ [id: string]: boolean }>({ _: false });
    const [state, dispatch] = useReducer(reducer, initialContent);
    const getShopContentCallback = useCallback(() => (getShopContent()), []);
    useEffect(() => {
        dispatch({ type: 'CONTENT_REQUEST' });
        (async () => {
            const data = await getShopContentCallback();
            dispatch({ type: 'CONTENT_SUCCESS', payload: data });
        })();
    }, [dispatch, getShopContentCallback]);

    useDebounce(() => {
        console.log('blabla');
    }, 1000, []);

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
                                {!ready[id]
                                && (
                                    <img
                                        src={`${productAssets}${images.main}`}
                                        alt=""
                                        onLoad={() => setReady({ ...ready, [id]: true })}
                                        width="0"
                                        height="0"
                                    />
                                )}
                                <ReactPlaceholder
                                    ready={ready[id]}
                                    type="rect"
                                    showLoadingAnimation
                                    style={{ width: 300, height: 500 }}
                                >
                                    <ProdImg
                                        src={`${productAssets}${images.main}`}
                                        alt=""
                                        width="300"
                                        height="500"
                                    />
                                </ReactPlaceholder>
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
