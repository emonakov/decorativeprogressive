import React from 'react';
import styled from 'styled-components';

import CategoryLink from '../../shared/components/CategoryLink';
import Niki from '../../images/niki.jpg';

const RightBar = styled.section`
    grid-area: right;
`;

const Menu: React.FC = ({ children }) => (
    <RightBar>
        <CategoryLink linkTo='/hangings' title='Hangings' img={Niki} />
        {children}
    </RightBar>
);

export default Menu;
