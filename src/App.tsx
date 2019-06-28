import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './shared/libs/FontAwesomeLib';

import PageWrapper from './shared/components/PageWrapper';
import RightBar from './components/Rightbar';
import LeftBar from './components/Leftbar';
import CenterBar from './components/Centerbar';
import HomePageHero from './components/HomePageHero';
import HangingsHero from './components/HangingsHero';
import BagsHero from './components/BagsHero';
import LinkTo from './shared/components/LinkTo';

import About from './components/About';

const HomePage: React.FC = () => (
    <>
        <HomePageHero />
        <About />
    </>
);

const App: React.FC = () => {
    return (
        <PageWrapper>
            <Router>
                <Route path="/" exact component={HomePage} />
                <Route path="/bags" component={BagsHero} />
                <Route path="/hangings" component={HangingsHero} />
                <LeftBar />
                <CenterBar>
                    <LinkTo to="/" scrollToHero>
                        <p>Home</p>
                    </LinkTo>
                    <LinkTo to="/bags" scrollToHero>
                        <p>Bags</p>
                    </LinkTo>
                    <LinkTo to="/hangings" scrollToHero>
                        <p>Hangings</p>
                    </LinkTo>
                </CenterBar>
                <RightBar />
            </Router>
        </PageWrapper>
    );
};

export default App;
