import React from 'react';

import MainNav from './components/rightbar/Menu';
import Screen from './components/leftbar/Screen';
import CenterBar from './components/centerbar/CenterBar';
import './components/styles/wrappers.css';
import './App.css';

const App: React.FC = () => {
  return (
    <section className="wrapper">
      <Screen />
      <CenterBar />
      <MainNav />
    </section>
  );
}

export default App;
