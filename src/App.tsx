import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './shared/libs/FontAwesomeLib';

import RightBar from './components/Rightbar';
import LeftBar from './components/Leftbar';
import CenterBar from './components/Centerbar'
import HomePageHero from './components/HomePageHero';
import HeroTestPage from './components/TestPageHero';
import Hero2TestPage from './components/Test2PageHero';
import LinkTo from './shared/components/LinkTo';
import './App.css';

const Home: React.FC = () => (
	<>
		<HomePageHero />
		<LeftBar />
		<CenterBar>
			<LinkTo to="/test" scrollToHero>
				<p>TEST1</p>
			</LinkTo>
			<LinkTo to="/test2" scrollToHero>
				<p>TEST2</p>
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
				<p>Home</p>
			</LinkTo>
			<LinkTo to="/test2" scrollToHero>
				<p>test2</p>
			</LinkTo>
		</CenterBar>
		<RightBar />
	</>
);

const Test2: React.FC = () => (
	<>
		<Hero2TestPage />
		<LeftBar />
		<CenterBar>
			<LinkTo to="/" scrollToHero>
				<p>home</p>
			</LinkTo>
			<LinkTo to="/test" scrollToHero>
				<p>test1</p>
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
				<Route path="/test2" component={Test2} />
			</Router>
		</section>
	);
}

export default App;
