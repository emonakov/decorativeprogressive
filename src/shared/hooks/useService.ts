import { useCallback, useEffect } from 'react';

import { useContextState, StateInterface } from '../components/StateProvider';

export const useService = (
    cb: (...args: any[]) => Promise<any>,
    payloadKey: string,
    ...cbArgs: any[]
): StateInterface => {
    const [state, dispatch] = useContextState();
    const serviceCallback = useCallback((...args) => (cb(...args)), [cb]);

    useEffect(() => {
        dispatch({ type: 'CONTENT_REQUEST' });
        (async () => {
            try {
                const data = await serviceCallback(...cbArgs);
                dispatch({ type: 'CONTENT_SUCCESS', payload: { [payloadKey]: data } });
            } catch (err) {
                dispatch({ type: 'CONTENT_FAILURE', error: err.message });
            }
        })();
    }, [dispatch, serviceCallback, payloadKey]);

    return state;
};
