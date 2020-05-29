import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Frame from '../../shared/components/Frame';
import Hero from '../../shared/components/Hero';
import HeroImg from '../../images/homepage-hero.png';

const HomePageHero: React.FC = ({ children, ...props }) => (
    <Hero background={HeroImg} {...props}>
        <Frame scrollToEl="main">
            {children}
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default HomePageHero;
