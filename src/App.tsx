import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './shared/libs/FontAwesomeLib';

import RightBar from './components/Rightbar';
import LeftBar from './components/Leftbar';
import CenterBar from './components/Centerbar'
import Hero from './components/HomePageHero';
import './App.css';

const Home: React.FC = () => (
	<>
		<Hero />
		<LeftBar />
		<CenterBar>
			<Link to="/test">
				<p>TEST</p>
			</Link>
		</CenterBar>
		<RightBar />
	</>
);

const Test: React.FC = () => (
	<h1>
		<Link to="/">
			<p>TEST</p>
		</Link>
	</h1>
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
