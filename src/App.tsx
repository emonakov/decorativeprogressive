import React, {
    lazy,
    Suspense,
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CloudinaryContext } from 'cloudinary-react';
import { RadixProvider } from '@modulz/radix';

import './shared/libs/FontAwesomeLib';
import { theme } from './config';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import ScrollToTop from './shared/components/ScrollToTop';
import Fallback from './components/Fallback';

import { useIsUserExist } from './services/user';

const HomePage = lazy(() => import('./components/Pages/Home'));
const ShopPage = lazy(() => import('./components/Pages/Shop'));
const NotFoundPage = lazy(() => import('./components/Pages/NotFound'));
const ProductPage = lazy(() => import('./components/Pages/Product'));
const AdminMain = lazy(() => import('./components/Pages/Admin/Main'));
const AdminProducts = lazy(() => import('./components/Pages/Admin/Products'));
const AdminProduct = lazy(() => import('./components/Pages/Admin/Product'));
const AdminAddProduct = lazy(() => import('./components/Pages/Admin/AddProduct'));

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
        <Route path="/admin/products/add" exact component={AdminAddProduct} />
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
    const { isAuthenticated, isLoading } = useIsUserExist();

    return (
        <ThemeProvider theme={theme}>
            <RadixProvider>
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
            </RadixProvider>
        </ThemeProvider>
    );
};

export default App;
