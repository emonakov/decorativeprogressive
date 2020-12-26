import React, {
    lazy,
    Suspense,
    useEffect,
    useState,
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CloudinaryContext } from 'cloudinary-react';

import './shared/libs/FontAwesomeLib';
import { theme } from './config';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import ScrollToTop from './shared/components/ScrollToTop';
import Fallback from './components/Fallback';

import { auth, isUserExists } from './firebase/firebase.utils';

const HomePage = lazy(() => import('./components/Pages/Home'));
const ShopPage = lazy(() => import('./components/Pages/Shop'));
const NotFoundPage = lazy(() => import('./components/Pages/NotFound'));
const ProductPage = lazy(() => import('./components/Pages/Product'));
const Test = lazy(() => import('./components/Pages/SignIn'));
const SignOut = lazy(() => import('./components/Pages/SignOut'));

const AuthenticatedRoutes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route
            path={'/shop/item/:id(\\w+)'}
            strict
            component={ProductPage}
        />
        <Route path="/signedin" exact component={() => <h1>BLA</h1>} />
        <Route path="/signout" exact component={SignOut} />
        <Route component={NotFoundPage} />
    </Switch>
);

const UnauthenticatedRoutes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route
            path={'/shop/item/:id(\\w+)'}
            strict
            component={ProductPage}
        />
        <Route path="/signin" exact component={Test} />
        <Route component={NotFoundPage} />
    </Switch>
);

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (authData) => {
            if (authData) {
                setIsAuthenticated(await isUserExists(authData?.uid));
            } else {
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        });

        return unsubscribeFromAuth;
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CloudinaryContext cloudName="decorativeprogressive" includeOwnBody>
                <PageWrapper>
                    <Router>
                        <Suspense fallback={<Fallback />}>
                            <Menubar />
                            {!isLoading && (
                                <>
                                    {!isAuthenticated && <UnauthenticatedRoutes />}
                                    {isAuthenticated && <AuthenticatedRoutes />}
                                </>
                            )}
                            <ScrollToTop />
                        </Suspense>
                    </Router>
                </PageWrapper>
            </CloudinaryContext>
        </ThemeProvider>
    );
};

export default App;
