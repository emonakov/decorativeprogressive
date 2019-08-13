import React, { useState } from 'react';
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

const Thumb = styled(Img)<{ active: boolean }>`
    opacity: 0.9;
    width: 140px;
    padding: 0;
    box-sizing: border-box;
    border: ${({ active, theme }) => (active ? `1px ${theme.darkBorderColor} solid` : '1px transparent solid')};
    cursor: pointer;

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

const MAIN_IMG = 'main.jpg';


const GalleryWrapper: React.FC<GalleryProps> = ({ item }) => {
    const [mainImg, setMainImg] = useState(MAIN_IMG);

    return (
        <Gallery>
            <ThumbContainer>
                <ThumbItem key="main.jpg">
                    <Thumb
                        src={`${process.env.PUBLIC_URL}/assets/products/product_${item.id}/main.jpg`}
                        onClick={() => setMainImg(MAIN_IMG)}
                        active={mainImg === MAIN_IMG}
                        alt=""
                    />
                </ThumbItem>
                {item.images.add.map(image => (
                    <ThumbItem key={image}>
                        <Thumb
                            src={`${process.env.PUBLIC_URL}/assets/products/product_${item.id}/${image}`}
                            onClick={() => setMainImg(image)}
                            active={mainImg === image}
                            alt=""
                        />
                    </ThumbItem>
                ))}
            </ThumbContainer>
            <ProdImg
                src={`${process.env.PUBLIC_URL}/assets/products/product_${item.id}/${mainImg}`}
                alt=""
            />
        </Gallery>
    );
};

export default GalleryWrapper;
