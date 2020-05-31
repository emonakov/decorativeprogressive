import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface LinkToProps {
    to: string;
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
    children, to, exact,
}) => {
    const props = {
        to,
        exact,
    };

    return (
        <StyledLink
            {...props}
            isActive={(_, location) => RegExp(to).test(location.pathname)}
        >
            {children}
        </StyledLink>
    );
};

export default LinkTo;
