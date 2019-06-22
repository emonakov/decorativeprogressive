import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollTo } from '../../shared/utils/dom';

import './styles/hero.css';

const Hero: React.FC = () => (
    <section className="hero">
        <section className="hero__rant" onClick={() => { scrollTo('.left-bar') }}>
            <h1>Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </section>
    </section>
);

export default Hero;
