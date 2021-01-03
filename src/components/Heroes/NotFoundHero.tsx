import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from '../../shared/components/Hero';
import Frame from '../../shared/components/Frame';

import NotFoundHero from '../../images/hangings-hero.png';

const Span = styled.span`
    padding-left: ${({ theme }) => theme.paddingSm};
`;

const NotFoundPageHero: React.FC = () => (
    <Hero background={NotFoundHero}>
        <Frame scrollToEl="main">
            <h1>
                Page not found
                <Span role="img" aria-label="puzzled">🤨</Span>
            </h1>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" />
        </Frame>
    </Hero>
);

export default NotFoundPageHero;
