import React from 'react';

import './shared/FontAwesomeLib';

import MainNav from './components/rightbar/Menu';
import Screen from './components/leftbar/Screen';
import CenterBar from './components/centerbar/CenterBar'
import Hero from './components/hero/Hero';
import './App.css';

const App: React.FC = ({ children }) => {
	return (
		<section className="wrapper">
			<Hero />
			<Screen />
			<CenterBar />
			<MainNav />
			{children}
		</section>
	);
}

export default App;
