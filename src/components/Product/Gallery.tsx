import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Thumbs from './Thumbs';
import Img from '../../shared/components/CloudinaryImage';
import { getCloudinaryUrl } from '../../shared/utils/cloudinary';
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
    const [mainImageUrl] = item.images;
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [mainImg, setMainImg] = useState(mainImageUrl);
    const [showLightbox, setShowLightbox] = useState(false);
    const { images } = item;

    const getLightboxUrl = (url: string) => getCloudinaryUrl(url, { height: '864', crop: 'scale' });

    useEffect(() => {
        const mainIndex = images.findIndex((img) => img === mainImg);
        setPhotoIndex(mainIndex);
    }, [mainImg, images]);

    return (
        <>
            {showLightbox && (
                <Lightbox
                    mainSrc={getLightboxUrl(images[photoIndex])}
                    nextSrc={getLightboxUrl(images[(photoIndex + 1) % images.length])}
                    prevSrc={
                        getLightboxUrl(images[(photoIndex + images.length - 1) % images.length])
                    }
                    onCloseRequest={() => setShowLightbox(false)}
                    onMovePrevRequest={
                        () => {
                            setPhotoIndex((photoIndex + images.length - 1) % images.length);
                        }
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
            <Gallery>
                <Thumbs
                    item={item}
                    mainImageUrl={mainImageUrl}
                    mainImg={mainImg}
                    setMainImg={setMainImg}
                />
                <ProdImg
                    publicId={mainImg}
                    onClick={() => setShowLightbox(true)}
                    width="300"
                    crop="scale"
                />
            </Gallery>
        </>
    );
};

export default GalleryWrapper;
