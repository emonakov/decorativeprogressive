import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import ShopHero from '../../images/bags-page.png';

const ShopPageHero: React.FC = () => (
    <Hero background={ShopHero}>
        <Frame scrollToEl="main">
            <h1>Shop on Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default ShopPageHero;
