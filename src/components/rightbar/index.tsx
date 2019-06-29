import React from 'react';
import styled from 'styled-components';

import CategoryLink from '../../shared/components/CategoryLink';

const RightBar = styled.section`
    grid-area: right;
`;

const Menu: React.FC = ({ children }) => (
    <RightBar>
        <CategoryLink linkTo='/hangings' title='Hangings' />
        {children}
    </RightBar>
);

export default Menu;
