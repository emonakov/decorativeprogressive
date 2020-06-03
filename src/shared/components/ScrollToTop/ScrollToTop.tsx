import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { scrollTo } from '../../utils/dom';

const PointerWrapper = styled.div`
    position: sticky;
    top: 90vh;
    left: 95vw;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;

    &.visible {
        opacity: 1;
    }
`;

const ScrollToTop: React.FC = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 500) {
                scrollerRef.current!.classList.add('visible');
            } else {
                scrollerRef.current!.classList.remove('visible');
            }
        });
    }, []);

    return (
        <PointerWrapper
            onClick={() => scrollTo('nav')}
            ref={scrollerRef}
        >
            <FontAwesomeIcon icon={['fas', 'angle-double-up']} size="2x" />
        </PointerWrapper>
    );
};

export default ScrollToTop;
