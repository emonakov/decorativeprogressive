import React from 'react';
import styled from 'styled-components';

import LinkTo from '../../components/LinkTo';

const Heading = styled.h1`
    text-align: center;
`;

interface CategoryLinkProps {
    linkTo: string;
    title: string;
    exact?: boolean;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ linkTo, title, exact }) => (
    <LinkTo to={linkTo} scrollToHero exact={exact}>
        <Heading>{title}</Heading>
    </LinkTo>
);

export default CategoryLink;
