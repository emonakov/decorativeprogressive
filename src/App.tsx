import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './shared/libs/FontAwesomeLib';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import {
    HomePage,
    BagsPage,
    HangingsPage,
} from './components/Pages';

const App: React.FC = () => (
    <PageWrapper>
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/bags" component={BagsPage} />
            <Route path="/hangings" component={HangingsPage} />
            <Redirect exact to="/" />
            <Menubar />
        </Router>
    </PageWrapper>
);

export default App;
