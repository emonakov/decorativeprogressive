import React from 'react';

import './shared/libs/FontAwesomeLib';

import RightBar from './components/Rightbar';
import LeftBar from './components/Leftbar';
import CenterBar from './components/Centerbar'
import Hero from './components/Hero';
import './App.css';

const App: React.FC = ({ children }) => {
	return (
		<section className="wrapper">
			<Hero />
			<LeftBar />
			<CenterBar />
			<RightBar />
			{children}
		</section>
	);
}

export default App;
