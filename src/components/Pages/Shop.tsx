import React, { useReducer, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ShopPageHero } from '../Heroes';
import ContentWrapper from '../../shared/components/ContentWrapper';
import ImgUnstyled from '../../shared/components/Img';

import getShopContent from '../../mocks/shop';
import LinkTo from '../../shared/components/LinkTo';

interface Item {
    id: number;
    img: string;
    title: string;
}

interface State {
    loading: boolean;
    items: Item[];
    errors?: string[];
}

interface Action {
    type: string;
    payload?: object;
}

const initialContent = {
    loading: false,
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
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const P = styled.p`
    text-align: center;
    margin: 0 0 15px;
`;

const Img = styled(ImgUnstyled)`
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }
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
                    {items.map(({ title, img, id }) => (
                        <div key={id}>
                            <LinkTo to={`/shop/item/${id}`}>
                                <Img src={`${process.env.PUBLIC_URL}/assets/${img}`} alt="" />
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
