import React, { useReducer, useCallback, useEffect } from 'react';
import { BagsPageHero } from '../Heroes';
import ContentWrapper from '../../shared/components/ContentWrapper';

import getBagsContent from '../../mocks/bags';

interface State {
    loading: boolean;
    content: string;
    errors?: string[];
}

interface Action {
    type: string;
    payload?: object;
}

const initialContent = {
    loading: false,
    content: '',
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

const BagsPage: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialContent);
    const getBagsContentCallback = useCallback(() => (getBagsContent()), []);
    useEffect(() => {
        dispatch({ type: 'CONTENT_REQUEST' });
        (async () => {
            const data = await getBagsContentCallback();
            dispatch({ type: 'CONTENT_SUCCESS', payload: data });
        })();
    }, [dispatch, getBagsContentCallback]);

    const { loading, content } = state;

    return (!loading && (
        <>
            <BagsPageHero />
            <ContentWrapper>{content}</ContentWrapper>
            {children}
        </>
    )) || null;
};

export default BagsPage;
