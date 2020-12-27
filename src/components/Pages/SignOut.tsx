import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const SignOut: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((authData) => {
            if (!authData) {
                history.push('/');
            }
        });
    }, [history]);

    return (
        <button type="button" onClick={() => auth.signOut()}>SIGN OUT</button>
    );
};

export default SignOut;
