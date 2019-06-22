import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/hero.css';

const Hero: React.FC = () => (
    <section className="hero">
        <section className="hero__rant">
            <h1>Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </section>
    </section>
);

export default Hero;
