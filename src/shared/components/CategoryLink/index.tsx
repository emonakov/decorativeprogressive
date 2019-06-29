import React from 'react';
import styled from 'styled-components';

import LinkTo from '../../components/LinkTo';

const Heading = styled.h1`
    text-align: center;
`;

interface CategoryLinkProps {
    linkTo: string;
    title: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ linkTo, title }) => (
    <LinkTo to={linkTo} scrollToHero>
        <Heading>{title}</Heading>
    </LinkTo>
);

export default CategoryLink;
