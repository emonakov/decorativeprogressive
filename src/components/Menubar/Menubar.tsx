import React from 'react';
import styled from 'styled-components';

import FrameUnstyled from '../../shared/components/Frame';
import CategoryLink from '../../shared/components/CategoryLink';

import { menuConfig } from '../../config';

const InnerWrapper = styled.nav`
    display: flex;
    grid-area: menubar;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 ${({ theme }) => theme.paddingMd};
    position: absolute;
    width: 100%;
    top: 30px;
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

const Frame = styled(FrameUnstyled)`
    border-color: transparent;
    border-radius: 20px;
    background-color: #FFBD599c;
    font-size: 1.7em;
    width: 200px;
    height: 80px;
`;

const Menubar: React.FC = () => (
    <InnerWrapper>
        <MenuBarSection>
            {menuConfig.map(({ label, link }) => (
                <Frame key={label}>
                    <CategoryLink linkTo={link} title={label} exact />
                </Frame>
            ))}
        </MenuBarSection>
    </InnerWrapper>
);

export default Menubar;
