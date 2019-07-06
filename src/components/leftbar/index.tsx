import React from 'react';
import styled from 'styled-components';

import CategoryLink from '../../shared/components/CategoryLink';

const LeftBarWrapper = styled.section`
    grid-area: left;
`;

const Screen: React.FC = ({ children }) => (
    <LeftBarWrapper>
        <CategoryLink linkTo='/' title='About Us' exact />
        {children}
    </LeftBarWrapper>
);

export default Screen;
