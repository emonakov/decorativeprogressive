import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './shared/libs/FontAwesomeLib';

import PageWrapper from './shared/components/PageWrapper';
import HomePageHero from './components/Heroes/HomePageHero';
import HangingsHero from './components/Heroes/HangingsHero';
import BagsHero from './components/Heroes/BagsHero';
import Menubar from './components/Menubar';

import About from './components/About';

const App: React.FC = () => (
    <PageWrapper>
        <Router>
            <Route
                path="/"
                exact
                render={() => (
                    <>
                        <HomePageHero />
                        <About />
                    </>
                )}
            />
            <Route path="/bags" component={BagsHero} />
            <Route path="/hangings" component={HangingsHero} />
            <Redirect exact to="/" />
            <Menubar />
        </Router>
    </PageWrapper>
);

export default App;
