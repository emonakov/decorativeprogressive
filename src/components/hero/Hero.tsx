import React from 'react';

import Frame from '../../shared/components/Frame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollTo } from '../../shared/utils/dom';

import './styles/hero.css';

const Hero: React.FC = () => (
    <section className="hero">
        <Frame classProp="hero_rant" onclick={() => { scrollTo('.left-bar') }}>
            <h1>Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </section>
);

export default Hero;
