import React from 'react';
import styled from 'styled-components';

import CategoryLink from '../../shared/components/CategoryLink';

const CenterBarWrapper = styled.section`
    grid-area: center;
`;

const CenterBar: React.FC = ({ children }) => (
    <CenterBarWrapper>
        <CategoryLink linkTo='/bags' title='Bags' />
        {children}
    </CenterBarWrapper>
);

export default CenterBar;
