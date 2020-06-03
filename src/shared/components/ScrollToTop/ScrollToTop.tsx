import React from 'react';
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
`;

const ScrollToTop: React.FC = () => {
    console.log('lalal');

    return (
        <PointerWrapper onClick={() => scrollTo('nav')}>
            <FontAwesomeIcon icon={['fas', 'angle-double-up']} size="2x" />
        </PointerWrapper>
    );
};

export default ScrollToTop;
