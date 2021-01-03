import React from 'react';
import {
    Button, List, ListItem, Box,
} from '@modulz/radix';

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
                {!state.isAuthenticated && <Button size={1} onClick={signInWithGoogle}>SIGN IN</Button>}
                {state.isAuthenticated && (
                    <Box>
                        <Button size={1} onClick={() => auth.signOut()}>SIGN OUT</Button>
                        <List>
                            <LinkTo to="/admin/products">
                                <ListItem>
                                    PRODUCTS
                                </ListItem>
                            </LinkTo>
                            <LinkTo to="/admin/products/add">
                                <ListItem>
                                    ADD PRODUCT
                                </ListItem>
                            </LinkTo>
                        </List>
                    </Box>
                )}
            </ContentWrapper>
        </>
    );
};

export default Main;
