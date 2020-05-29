import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './shared/libs/FontAwesomeLib';
import { theme } from './config';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';

import Fallback from './components/Fallback';

const HomePage = lazy(() => import('./components/Pages/Home'));
const ShopPage = lazy(() => import('./components/Pages/Shop'));
const NotFoundPage = lazy(() => import('./components/Pages/NotFound'));
const ProductPage = lazy(() => import('./components/Pages/Product'));
const AboutPage = lazy(() => import('./components/Pages/About'));

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <PageWrapper>
            <Router>
                <Suspense fallback={<Fallback />}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about" exact component={AboutPage} />
                        <Route path="/shop" exact component={ShopPage} />
                        <Route
                            path={'/shop/item/:id(\\d+)'}
                            strict
                            component={ProductPage}
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Suspense>
                <Menubar />
            </Router>
        </PageWrapper>
    </ThemeProvider>
);

export default App;
