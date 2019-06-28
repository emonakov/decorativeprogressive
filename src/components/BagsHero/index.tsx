import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import BagsHero from '../../images/bags-page.png';

const BagsPageHero: React.FC = () => (
    <Hero background={BagsHero}>
        <Frame scrollToEl=".left-bar">
            <h1>Bags on Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default BagsPageHero;
