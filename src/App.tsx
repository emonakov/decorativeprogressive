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

import { useContextState } from './shared/components/StateProvider';
import { auth, isUserExists } from './firebase/firebase.utils';

const HomePage = lazy(() => import('./components/Pages/Home'));
const ShopPage = lazy(() => import('./components/Pages/Shop'));
const NotFoundPage = lazy(() => import('./components/Pages/NotFound'));
const ProductPage = lazy(() => import('./components/Pages/Product'));
const AdminMain = lazy(() => import('./components/Pages/Admin/Main'));
const AdminProducts = lazy(() => import('./components/Pages/Admin/Products'));
const AdminProduct = lazy(() => import('./components/Pages/Admin/Product'));

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
        <Route path="/admin" exact component={AdminMain} />
        <Route path="/admin/products" exact component={AdminProducts} />
        <Route path={'/admin/products/:id(\\w+)'} exact component={AdminProduct} />
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
        <Route path="/admin" exact component={AdminMain} />
        <Route component={NotFoundPage} />
    </Switch>
);

const App: React.FC = () => {
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
