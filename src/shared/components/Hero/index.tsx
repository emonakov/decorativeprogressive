import React from 'react';

import './styles/hero.css';

interface Props {
    classProp?: string;
}

const Hero: React.FC<Props> = ({ children, classProp }) => (
    <section className={`hero ${classProp}`}>
        {children}
    </section>
);

export default Hero;
