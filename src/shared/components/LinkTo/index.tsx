import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { scrollTo } from '../../utils/dom';
import { textColor, linkHoverColor } from '../../colors';

interface LinkToProps {
    to: string;
    scrollToHero?: boolean;
    exact?: boolean;
}

const StyledLink = styled(NavLink)`
    color: ${textColor};
    transition: color 2s ease-out;
    text-decoration: none;
    text-transform: uppercase;

    &.active > *, &:hover {
        color: ${linkHoverColor};
    }
`;

const LinkTo: React.FC<LinkToProps> = ({
    children, to, scrollToHero, exact,
}) => {
    const props = {
        to,
        onClick: () => scrollToHero && scrollTo('', true),
        exact,
    };

    return <StyledLink {...props}>{children}</StyledLink>;
};

export default LinkTo;
