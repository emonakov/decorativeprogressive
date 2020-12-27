import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authData) => {
            if (authData) {
                history.push('/signedin');
            }
        });

        return unsubscribe;
    });

    return (
        <button type="button" onClick={signInWithGoogle}>SIGN IN</button>
    );
};

export default SignIn;
