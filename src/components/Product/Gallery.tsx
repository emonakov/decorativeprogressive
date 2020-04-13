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

const GalleryWrapper: React.FC<{ item: ItemInterface }> = ({ item }) => {
    const [mainImg, setMainImg] = useState(item.images.main);
    const [showLightbox, setShowLightbox] = useState(false);
    const mainImageUrl = `${item.productAssets}${item.images.main}`;

    return (
        <>
            {showLightbox && (
                <Lightbox
                    mainSrc={`${item.productAssets}${mainImg}`}
                    onCloseRequest={() => setShowLightbox(false)}
                />
            )}
            <Gallery>
                <ThumbContainer>
                    <ThumbItem key={mainImg}>
                        <Thumb
                            src={`${mainImageUrl}`}
                            onClick={() => setMainImg(item.images.main)}
                            active={mainImg === item.images.main}
                            alt=""
                        />
                    </ThumbItem>
                    {item.images.add.map((image) => (
                        <ThumbItem key={image}>
                            <Thumb
                                src={`${item.productAssets}${image}`}
                                onClick={() => setMainImg(image)}
                                active={mainImg === image}
                                alt=""
                            />
                        </ThumbItem>
                    ))}
                </ThumbContainer>
                <ProdImg
                    src={`${item.productAssets}${mainImg}`}
                    onClick={() => setShowLightbox(true)}
                    alt=""
                />
            </Gallery>
        </>
    );
};

export default GalleryWrapper;
