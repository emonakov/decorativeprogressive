import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Img from '../../shared/components/Img';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

const Gallery = styled.section`
    display: grid;
    grid-gap: ${({ theme }) => theme.contentPadding};
    grid-template-columns: 150px 1fr;
`;

const ProdImg = styled(Img)`
    opacity: 0.9;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

const Thumb = styled(Img)<{ active: boolean }>`
    opacity: 0.9;
    width: ${({ theme }) => theme.galleryThumbWidth};
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
    padding: ${({ theme }) => theme.paddingMdOffsetSm};
`;

const MAIN_IMG = 'main.jpg';
const IMG_PATH = `${process.env.PUBLIC_URL}/assets/products/product_`;


const GalleryWrapper: React.FC<{ item: ItemInterface }> = ({ item }) => {
    const [mainImg, setMainImg] = useState(MAIN_IMG);
    const [showLightbox, setShowLightbox] = useState(false);

    return (
        <>
            {showLightbox && (
                <Lightbox
                    mainSrc={`${IMG_PATH}${item.id}/${mainImg}`}
                    onCloseRequest={() => setShowLightbox(false)}
                />
            )}
            <Gallery>
                <ThumbContainer>
                    <ThumbItem key="main.jpg">
                        <Thumb
                            src={`${IMG_PATH}${item.id}/main.jpg`}
                            onClick={() => setMainImg(MAIN_IMG)}
                            active={mainImg === MAIN_IMG}
                            alt=""
                        />
                    </ThumbItem>
                    {item.images.add.map((image) => (
                        <ThumbItem key={image}>
                            <Thumb
                                src={`${IMG_PATH}${item.id}/${image}`}
                                onClick={() => setMainImg(image)}
                                active={mainImg === image}
                                alt=""
                            />
                        </ThumbItem>
                    ))}
                </ThumbContainer>
                <ProdImg
                    src={`${IMG_PATH}${item.id}/${mainImg}`}
                    onClick={() => setShowLightbox(true)}
                    alt=""
                />
            </Gallery>
        </>
    );
};

export default GalleryWrapper;
