import React from 'react';
import styled from 'styled-components';

interface Props {
    background?: string;
}

interface HeroSectionProps {
    background?: string;
}

const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Julius Sans One', sans-serif;
    grid-area: hero;
    height: 100vmin;
    font-size: 1.5rem;
    background: ${(p: HeroSectionProps) => (
        `url('${p.background}') no-repeat center center fixed` || 'none'
    )};
    background-size: contain;
    background-position: bottom;
`;

const Hero: React.FC<Props> = ({ children, background }) => (
    <HeroSection background={background} className='hero'>
        {children}
    </HeroSection>
);

export default Hero;
