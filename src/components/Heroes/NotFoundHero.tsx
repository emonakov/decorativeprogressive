import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import NotFoundHero from '../../images/hangings-hero.png';

const NotFoundPageHero: React.FC = () => (
    <Hero background={NotFoundHero}>
        <Frame scrollToEl="nav">
            <h1>
                Page not found
                <span role="img" aria-label="puzzled">🤨</span>
            </h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default NotFoundPageHero;
