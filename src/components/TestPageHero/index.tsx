import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';
import { scrollTo } from '../../shared/utils/dom';
import './styles/hero-test-page.css';

const TestPageHero: React.FC = () => (
    <Hero classProp="hero_test_page">
        <Frame classProp="hero_rant" onclick={() => { scrollTo('.left-bar') }}>
            <h1>Test page on Decorative Progressive</h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default TestPageHero;
