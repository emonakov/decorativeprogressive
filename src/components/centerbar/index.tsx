import React from 'react';
import styled from 'styled-components';

import CategoryLink from '../../shared/components/CategoryLink';
import Niki from '../../images/niki.jpg';

const CenterBarWrapper = styled.section`
    grid-area: center;
`;

const CenterBar: React.FC = ({ children }) => (
    <CenterBarWrapper>
        <CategoryLink linkTo='/bags' title='Bags' img={Niki} />
        {children}
    </CenterBarWrapper>
);

export default CenterBar;
