import React from 'react';
import styled from 'styled-components';

import CategoryLink from '../../shared/components/CategoryLink';
import Niki from '../../images/niki.jpg';

const LeftBarWrapper = styled.section`
    grid-area: left;
`;

const Screen: React.FC = ({ children }) => (
    <LeftBarWrapper>
        <CategoryLink linkTo='/' title='About Us' exact img={Niki} />
        {children}
    </LeftBarWrapper>
);

export default Screen;
