import React from 'react';
import styled from 'styled-components';

import LinkTo from '../LinkTo';

const Heading = styled.h1`
    font-family: Julius Sans One;
    text-align: center;
`;

interface CategoryLinkProps {
    linkTo: string;
    title: string;
    exact?: boolean;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
    children, linkTo, title, exact,
}) => (
    <LinkTo to={linkTo} scrollToHero exact={exact}>
        <Heading>{title}</Heading>
        {children}
    </LinkTo>
);

export default CategoryLink;
