import React from 'react';

import { HomePageHero } from '../Heroes';
// import About from '../About';

const HomePage: React.FC = () => (
    <>
        <HomePageHero>
            <h1>
                We stand for peace and democratic values and condemn any aggression
                against our fellow Ukrainians. If you share same values and find no
                justification to the acts of war please sign this
                {' '}
                <a href="http://www.change.org/NetVoyne">petition</a>
            </h1>
        </HomePageHero>
        {/* <About /> */}
    </>
);

export default HomePage;
