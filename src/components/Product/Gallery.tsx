import React, { useState } from 'react';
import styled from 'styled-components';
// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Thumbs from './Thumbs';
import Img from '../../shared/components/CloudinaryImage';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

const Gallery = styled.section`
    display: grid;
    grid-gap: ${({ theme }) => theme.contentPadding};
    grid-template-columns: 150px 1fr;
`;

const ProdImg = styled(Img)`
    opacity: 0.9;
    cursor: pointer;
    background: transparent;

    &:hover {
        opacity: 1;
    }
`;

const GalleryWrapper: React.FC<{ item: ItemInterface }> = ({ item }) => {
    const [mainImg, setMainImg] = useState(item.images.main);
    // const [showLightbox, setShowLightbox] = useState(false);
    const mainImageUrl = `${item.productAssets}${item.images.main}`;

    return (
        <>
            {/* {showLightbox && (
                <Lightbox
                    mainSrc={`${item.productAssets}${mainImg}`}
                    onCloseRequest={() => setShowLightbox(false)}
                />
            )} */}
            <Gallery>
                <Thumbs
                    item={item}
                    mainImageUrl={mainImageUrl}
                    mainImg={mainImg}
                    setMainImg={setMainImg}
                />
                <ProdImg
                    publicId={`${item.productAssets}${mainImg}`}
                    // onClick={() => setShowLightbox(true)}
                    width="300"
                    crop="scale"
                />
            </Gallery>
        </>
    );
};

export default GalleryWrapper;
