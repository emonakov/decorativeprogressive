import React from 'react';
import styled from 'styled-components';
import CategoryLink from '../../shared/components/CategoryLink';

import { menuConfig } from '../../config';

const MenuBarSection = styled.section`
    grid-area: menubar;
    display: flex;
    justify-content: space-between;
    width: 100%;

    a {
        flex-basis: 0;
        flex-grow: 1;
        padding: 5px;
    }
`;

const Menubar: React.FC = () => (
    <MenuBarSection>
        {menuConfig.map(({ label, link }) => (
            <CategoryLink key={link} linkTo={link} title={label} exact />
        ))}
    </MenuBarSection>
);

export default Menubar;
