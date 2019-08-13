import React from 'react';
import styled from 'styled-components';

import Img from '../../shared/components/Img';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

interface GalleryProps {
    item: ItemInterface;
}

const Gallery = styled.section`
    display: grid;
    grid-gap: ${({ theme }) => theme.contentPadding};
    grid-template-columns: 150px 1fr;
`;

const ProdImg = styled(Img)`
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }
`;

const Thumb = styled(Img)`
    opacity: 0.9;
    width: 140px;
    padding: 0;

    &:hover {
        opacity: 1;
    }
`;

const ThumbContainer = styled.ul`
    list-style: none;
`;

const ThumbItem = styled.li`
    padding: 10px;
`;


const GalleryWrapper: React.FC<GalleryProps> = ({ item }) => (
    <Gallery>
        <ThumbContainer>
            {item.images.add.map(image => (
                <ThumbItem key={image}>
                    <Thumb
                        src={`${process.env.PUBLIC_URL}/assets/products/product_${item.id}/${image}`}
                        alt=""
                    />
                </ThumbItem>
            ))}
        </ThumbContainer>
        <ProdImg
            src={`${process.env.PUBLIC_URL}/assets/products/product_${item.id}/main.jpg`}
            alt=""
        />
    </Gallery>
);

export default GalleryWrapper;
