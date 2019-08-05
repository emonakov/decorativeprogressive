import React from 'react';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import NotFoundHero from '../../images/hangings-hero.png';

const NotFoundPageHero: React.FC = () => (
    <Hero background={NotFoundHero}>
        <Frame>
            <h1>
                Page not found
                <span role="img" aria-label="puzzled">🤨</span>
            </h1>
        </Frame>
    </Hero>
);

export default NotFoundPageHero;
