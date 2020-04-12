import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './shared/libs/FontAwesomeLib';
import { theme } from './config';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import {
    HomePage,
    ShopPage,
    NotFoundPage,
    ProductPage,
} from './components/Pages';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <PageWrapper>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/product" exact component={ShopPage} />
                    <Route
                        path={['/product/item/:id(\\d+)', '/product/product/:id(\\d+)']}
                        strict
                        component={ProductPage}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
                <Menubar />
            </Router>
        </PageWrapper>
    </ThemeProvider>
);

export default App;
