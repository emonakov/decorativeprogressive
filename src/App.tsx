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
} from './components/Pages';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <PageWrapper>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/shop" exact component={ShopPage} />
                    <Route
                        path={['/shop/item/:id(\\d+)', '/shop/product/:id(\\d+)']}
                        strict
                        render={({ match }) => (
                            <h1>
                                Product id is
                                {match.params.id}
                            </h1>
                        )}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
                <Menubar />
            </Router>
        </PageWrapper>
    </ThemeProvider>
);

export default App;
