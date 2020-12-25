import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CloudinaryContext } from 'cloudinary-react';

import './shared/libs/FontAwesomeLib';
import { theme } from './config';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import ScrollToTop from './shared/components/ScrollToTop';
import Fallback from './components/Fallback';

import { getProducts } from './firebase/firebase.utils';

const HomePage = lazy(() => import('./components/Pages/Home'));
const ShopPage = lazy(() => import('./components/Pages/Shop'));
const NotFoundPage = lazy(() => import('./components/Pages/NotFound'));
const ProductPage = lazy(() => import('./components/Pages/Product'));

const App: React.FC = () => {
    getProducts();

    return (
        <ThemeProvider theme={theme}>
            <CloudinaryContext cloudName="decorativeprogressive" includeOwnBody>
                <PageWrapper>
                    <Router>
                        <Suspense fallback={<Fallback />}>
                            <Menubar />
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/shop" exact component={ShopPage} />
                                <Route
                                    path={'/shop/item/:id(\\d+)'}
                                    strict
                                    component={ProductPage}
                                />
                                <Route component={NotFoundPage} />
                            </Switch>
                            <ScrollToTop />
                        </Suspense>
                    </Router>
                </PageWrapper>
            </CloudinaryContext>
        </ThemeProvider>
    );
};

export default App;
