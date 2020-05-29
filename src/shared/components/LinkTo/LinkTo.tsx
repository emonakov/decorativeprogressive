import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { scrollTo } from '../../utils/dom';

interface LinkToProps {
    to: string;
    scrollToHero?: boolean;
    exact?: boolean;
}

const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.textColor};
    transition: color 2s ease-out;
    text-decoration: none;
    text-transform: uppercase;

    &.active > *, &:hover {
        color: ${({ theme }) => theme.linkHoverColor};
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

    return (
        <StyledLink
            {...props}
            isActive={(_, location) => new RegExp(to).test(location.pathname)}
        >
            {children}
        </StyledLink>
    );
};

export default LinkTo;
