import React from 'react';
import styled from 'styled-components';
import CategoryLink from '../../shared/components/CategoryLink';

import { menuConfig } from '../../config';

const InnerWrapper = styled.div`
    display: flex;
    grid-area: menubar;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 ${({ theme }) => theme.paddingMd};
`;

const MenuBarSection = styled.section`
    grid-area: menubar;
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
        flex-basis: 0;
        flex-grow: 1;
        padding: ${({ theme }) => theme.paddingSm};
    }
`;

const BorderTop = styled.div`
    display: block;
    width: calc(100% - 2px);
    height: ${({ theme }) => theme.menuBorderHeight};
    border-right: ${({ theme }) => theme.menuBorderStyle};
    border-left: ${({ theme }) => theme.menuBorderStyle};
    border-bottom: ${({ theme }) => theme.menuBorderStyle};
    border-color: ${({ theme }) => theme.menuBorderColor};
`;

const BorderBottom = styled(BorderTop)`
    border-top: ${({ theme }) => theme.menuBorderStyle};
    border-color: ${({ theme }) => theme.menuBorderColor};
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
