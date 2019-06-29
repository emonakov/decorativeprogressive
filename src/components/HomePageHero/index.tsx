import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import HeroImg from '../../images/homepage-hero.png';

const HomePageHero: React.FC = () => (
    <Hero background={HeroImg}>
        <Frame scrollToEl='.hero + section'>
            <h1>Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default HomePageHero;
