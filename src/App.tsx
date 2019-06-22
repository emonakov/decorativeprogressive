import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './shared/libs/FontAwesomeLib';

import RightBar from './components/Rightbar';
import LeftBar from './components/Leftbar';
import CenterBar from './components/Centerbar'
import HomePageHero from './components/HomePageHero';
import HeroTestPage from './components/TestPageHero';
import LinkTo from './shared/components/LinkTo';
import './App.css';

const Home: React.FC = () => (
	<>
		<HomePageHero />
		<LeftBar />
		<CenterBar>
			<LinkTo to="/test" scrollToHero>
				<p>TEST</p>
			</LinkTo>
		</CenterBar>
		<RightBar />
	</>
);

const Test: React.FC = () => (
	<>
		<HeroTestPage />
		<LeftBar />
		<CenterBar>
			<LinkTo to="/" scrollToHero>
				<p>TEST</p>
			</LinkTo>
		</CenterBar>
		<RightBar />
	</>
);

const App: React.FC = () => {
	return (
		<section className="wrapper">
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/test" component={Test} />
			</Router>
		</section>
	);
}

export default App;
