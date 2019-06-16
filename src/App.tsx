import React from 'react';
import './App.css';

const App: React.FC = ({ children }) => {
	return (
		<section className="wrapper">
			{children}
		</section>
	);
}

export default App;
