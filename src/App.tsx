import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './shared/libs/FontAwesomeLib';

import PageWrapper from './shared/components/PageWrapper';
import Menubar from './components/Menubar';
import {
    HomePage,
    BagsPage,
} from './components/Pages';

const App: React.FC = () => (
    <PageWrapper>
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/gallery" component={BagsPage} />
            {/* <Route path="/hangings" component={HangingsPage} /> */}
            {/* <Redirect exact to="/" /> */}
            <Menubar />
        </Router>
    </PageWrapper>
);

export default App;
