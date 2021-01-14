import React, { useContext, createContext, useReducer } from 'react';

import { ItemInterface } from '../../../Interfaces/ProductItemInterface';

export interface StateInterface {
    items?: ItemInterface[];
    isAuthenticated?: boolean;
    item?: ItemInterface;
    loading?: boolean;
    error?: string[];
    adminItems?: Partial<ItemInterface>[];
}

interface ActionInterface {
    type: string;
    payload?: {
        items?: ItemInterface[]
        item?: ItemInterface
        isAuthenticated?: boolean
    }
    error?: string
}

export type Dispatch = (action: ActionInterface) => void

interface ProviderProps {
    isAuthenticated?: boolean;
}

const StateContext = createContext<any | undefined>(undefined);

const stateReducer = (state: StateInterface, {
    payload,
    type,
    error,
}: ActionInterface) => {
    switch (type) {
        case 'update': {
            return { ...state, ...payload };
        }
        case 'CONTENT_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'CONTENT_SUCCESS':
            return {
                ...state,
                ...payload,
                loading: false,
                errors: null,
            };
        case 'CONTENT_FAILURE':
            return {
                ...state,
                loading: false,
                errors: ['Something went wrong', error],
            };
        default:
            return state;
    }
};

const initialState = {
    items: [],
    isAuthenticated: false,
};

const StateProvider: React.FC<ProviderProps> = ({ children }) => {
    const reducer = useReducer(stateReducer, initialState);

    return (
        <StateContext.Provider value={reducer}>
            {children}
        </StateContext.Provider>
    );
};

const useContextState = (): [StateInterface, Dispatch] => {
    const state = useContext(StateContext);
    if (state === undefined) {
        throw new Error('useContextState must be used within a Provider');
    }

    return state;
};

export { StateProvider, useContextState };
