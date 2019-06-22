import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';
import { scrollTo } from '../../shared/utils/dom';
import './styles/hero-home-page.css';

const HomePageHero: React.FC = () => (
    <Hero classProp="hero_home_page">
        <Frame classProp="hero_rant" onclick={() => { scrollTo('.left-bar') }}>
            <h1>Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default HomePageHero;
