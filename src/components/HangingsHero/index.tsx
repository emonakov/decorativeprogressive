import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import HangingsHero from '../../images/hangings-hero.png';

const HangingsPageHero: React.FC = () => (
    <Hero background={HangingsHero}>
        <Frame scrollToEl='.hero + section'>
            <h1>Hangings on Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default HangingsPageHero;
