import React, { useContext, createContext, useReducer } from 'react';

import { ItemInterface } from '../../../Interfaces/ProductItemInterface';

interface StateInterface {
    products?: ItemInterface[];
    isAuthenticated?: boolean;
}

interface ActionInterface {
    type: 'update';
    payload: {
        products?: ItemInterface[]
    }
}
interface ProviderProps {
    isAuthenticated?: boolean;
}

const StateContext = createContext<any | undefined>(undefined);

const stateReducer = (state: StateInterface, action: ActionInterface) => {
    switch (action.type) {
        case 'update': {
            const newState = { ...state, ...action.payload };

            return newState;
        }
        default:
            return state;
    }
};

const initialState = {
    products: [],
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

const useContextState = (): any => {
    const state = useContext(StateContext);
    if (state === undefined) {
        throw new Error('useContextState must be used within a Provider');
    }

    return state;
};

export { StateProvider, useContextState };
