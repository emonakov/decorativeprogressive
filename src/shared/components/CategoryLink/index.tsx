import React from 'react';
import styled from 'styled-components';

import LinkTo from '../LinkTo';
import Img from '../Img';
import Frame from '../Frame';

const Heading = styled.h1`
    text-align: center;
`;

interface CategoryLinkProps {
    linkTo: string;
    title: string;
    img: string;
    exact?: boolean;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ children, linkTo, title, img, exact }) => (
    <LinkTo to={linkTo} scrollToHero exact={exact}>
        <Frame scrollToEl='.hero'>
            <Heading>{title}</Heading>
            <Img src={img} opacity={0.8} />
            {children}
        </Frame>
    </LinkTo>
);

export default CategoryLink;
