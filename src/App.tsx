import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './shared/libs/FontAwesomeLib';
import { theme } from './config';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import {
    HomePage,
    ShopPage,
} from './components/Pages';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <PageWrapper>
            <Router>
                <Route path="/" exact component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                {/* <Route path="/hangings" component={HangingsPage} /> */}
                {/* <Redirect exact to="/" /> */}
                <Menubar />
            </Router>
        </PageWrapper>
    </ThemeProvider>
);

export default App;
