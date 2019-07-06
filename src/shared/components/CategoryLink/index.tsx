import React from 'react';
import styled from 'styled-components';

import LinkTo from '../LinkTo';
import Frame from '../Frame';

const Heading = styled.h1`
    text-align: center;
`;

interface CategoryLinkProps {
    linkTo: string;
    title: string;
    exact?: boolean;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ children, linkTo, title, exact }) => (
    <LinkTo to={linkTo} scrollToHero exact={exact}>
        <Frame>
            <Heading>{title}</Heading>
            {children}
        </Frame>
    </LinkTo>
);

export default CategoryLink;
