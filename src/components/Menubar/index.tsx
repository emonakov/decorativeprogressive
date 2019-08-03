import React from 'react';
import styled from 'styled-components';
import CategoryLink from '../../shared/components/CategoryLink';

import { menuConfig } from '../../config';

const InnerWrapper = styled.div`
    display: flex;
    grid-area: menubar;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
`;

const MenuBarSection = styled.section`
    grid-area: menubar;
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
        flex-basis: 0;
        flex-grow: 1;
        padding: 5px;
    }
`;

const BorderTop = styled.div`
    display: block;
    width: calc(100% - 2px);
    height: 15px;
    border-right: 1px solid;
    border-left: 1px solid;
    border-bottom: 1px solid;
    border-color: #C8BDAC;
`;

const BorderBottom = styled(BorderTop)`
    border-top: 1px solid;
    border-color: #C8BDAC;
    border-bottom: 0;
`;

const Menubar: React.FC = () => (
    <InnerWrapper>
        <BorderTop />
        <MenuBarSection>
            {menuConfig.map(({ label, link }) => (
                <CategoryLink key={link} linkTo={link} title={label} exact />
            ))}
        </MenuBarSection>
        <BorderBottom />
    </InnerWrapper>
);

export default Menubar;
