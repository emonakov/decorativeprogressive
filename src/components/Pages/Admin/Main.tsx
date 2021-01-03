import React from 'react';

import { HomePageHero } from '../../Heroes';
import ContentWrapper from '../../../shared/components/ContentWrapper';
import LinkTo from '../../../shared/components/LinkTo';

import { useContextState } from '../../../shared/components/StateProvider';
import { signInWithGoogle, auth } from '../../../firebase/firebase.utils';

const Main: React.FC = () => {
    const [state] = useContextState();

    return (
        <>
            <HomePageHero>
                <h1>Admin entrance</h1>
            </HomePageHero>
            <ContentWrapper>
                <h1>TEST</h1>
                {!state.isAuthenticated && <button type="button" onClick={signInWithGoogle}>SIGN IN</button>}
                {state.isAuthenticated && (
                    <>
                        <button type="button" onClick={() => auth.signOut()}>SIGN OUT</button>
                        <LinkTo to="/admin/products">PRODUCTS</LinkTo>
                    </>
                )}
            </ContentWrapper>
        </>
    );
};

export default Main;
