import React, { useReducer, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../shared/components/ContentWrapper';
import Gallery from '../Product/Gallery';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

import getShopContent from '../../mocks/shop';

interface ProductProps {
    match: { params: { id: number } };
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

const ContentWrapperProduct = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProdNav = styled.div`
    text-align: right;
`;

const BuyButton = styled.button`
    background: #67916D;
    padding: 20px 40px;
    border-radius: 5px;
    font-weight: bold;
    outline: none;
`;

const ProductPage: React.FC<ProductProps> = ({ match }) => {
    const [state, dispatch] = useReducer(reducer, initialContent);
    const getShopContentCallback = useCallback(() => (getShopContent()), []);
    useEffect(() => {
        dispatch({ type: 'CONTENT_REQUEST' });
        (async () => {
            const data = await getShopContentCallback();
            const product = data.items.find(item => item.id === Number(match.params.id));
            dispatch({ type: 'CONTENT_SUCCESS', payload: { item: product } });
        })();
    }, [dispatch, getShopContentCallback, match]);

    const { loading, item } = state;

    return (!loading && item && (
        <ContentWrapper>
            <ProdNav>
                Prev | Next
            </ProdNav>
            <ContentWrapperProduct>
                <Gallery item={item} />
                <div>
                    <h3>{item.title}</h3>
                    <div>
                        <p>
                            &euro;
                            {item.price}
                        </p>
                        <p>{item.description}</p>
                    </div>
                    <div>
                        <BuyButton type="button">BUY</BuyButton>
                    </div>
                </div>
            </ContentWrapperProduct>
        </ContentWrapper>
    )) || null;
};

export default ProductPage;
