import React from 'react';
import styled from 'styled-components';

interface Props {
    background?: string;
}

interface HeroSectionProps {
    background?: string;
}

const HeroSection = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.mainFont}, sans-serif;
    text-align: center;
    grid-area: hero;
    height: 100vmin;
    font-size: 1.5rem;
    background: ${(p: HeroSectionProps) => (
        p.background ? `url('${p.background}') no-repeat center center fixed` : 'none'
    )};
    background-size: contain;
    background-position: bottom;

    @media (max-width: 1024px) {
        background-position: top;
        background-size: 100vmax;
    }
`;

const Hero: React.FC<Props> = ({ children, background, ...props }) => (
    <HeroSection background={background} className="hero" {...props}>
        {children}
    </HeroSection>
);

export default Hero;
