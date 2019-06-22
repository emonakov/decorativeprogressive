import React from 'react';

import './shared/libs/FontAwesomeLib';

import MainNav from './components/Rightbar';
import Screen from './components/Leftbar';
import CenterBar from './components/Centerbar'
import Hero from './components/Hero';
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
