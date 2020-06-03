import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDebounce } from 'react-use';

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
    background: ${(p: HeroSectionProps) => `url('${p.background}') no-repeat center center fixed` || 'none'};
    background-size: contain;
    background-position: bottom;

    @media (max-width: 1024px) {
        background-position: top;
        background-size: 100vmax;
    }
`;

const Fade = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.wrapperBackground};
    position: absolute;
    transition: top 1.5s ease-out;
    box-shadow: 0 0 40px 5px ${({ theme }) => theme.wrapperBackground};
    top: 0;

    &.collapse {
        top: -100%;
    }
`;

const Hero: React.FC<Props> = ({ children, background, ...props }) => {
    const fade = useRef<HTMLDivElement>(null);

    useDebounce(() => {
        const node = fade.current;
        if (node) {
            node.classList.add('collapse');
        }
    }, 500, []);

    return (
        <HeroSection background={background} className="hero" {...props}>
            <Fade ref={fade} />
            {children}
        </HeroSection>
    );
};

export default Hero;
