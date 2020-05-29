import React from 'react';

import { HomePageHero } from '../Heroes';
import About from '../About';

const HomePage: React.FC = () => (
    <>
        <HomePageHero>
            <h1>Decorative Progressive</h1>
        </HomePageHero>
        <About />
    </>
);

export default HomePage;
