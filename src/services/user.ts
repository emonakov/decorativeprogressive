import { useState, useEffect } from 'react';

import { useContextState } from '../shared/components/StateProvider';
import { db, auth } from '../firebase/firebase.utils';

const isUserExists = async (userId: string): Promise<boolean> => {
    const userRef = db.collection('users').doc(userId);
    const snapshot = await userRef.get();

    return snapshot.exists;
};

export const useIsUserExist = (): { isAuthenticated?: boolean, isLoading: boolean } => {
    const [{ isAuthenticated }, dispatch] = useContextState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (authData) => {
            if (authData) {
                const userExists = await isUserExists(authData?.uid);
                dispatch({ type: 'update', payload: { isAuthenticated: userExists } });
            } else {
                dispatch({ type: 'update', payload: { isAuthenticated: false } });
            }
            setIsLoading(false);
        });

        return unsubscribeFromAuth;
    }, [dispatch]);

    return { isAuthenticated, isLoading };
};
