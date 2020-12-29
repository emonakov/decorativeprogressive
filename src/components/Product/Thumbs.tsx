import React from 'react';
import styled from 'styled-components';

import Img from '../../shared/components/CloudinaryImage';
import { ItemInterface } from '../../Interfaces/ProductItemInterface';

interface ThumbsInterface {
    item: ItemInterface;
    mainImg: string;
    mainImageUrl: string;
    setMainImg(image: string): void;
}

interface ThumbProps {
    active: number;
}

const Thumb = styled(Img)<ThumbProps>`
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

const Thumbs: React.FC<ThumbsInterface> = ({
    item,
    mainImg,
    mainImageUrl,
    setMainImg,
}) => (
    <ThumbContainer>
        <ThumbItem>
            <Thumb
                publicId={`${mainImageUrl}`}
                onClick={() => setMainImg(item.images.main)}
                active={Number(mainImg === item.images.main)}
                width="140"
                crop="scale"
            />
        </ThumbItem>
        {item.images.add.map((image) => (
            <ThumbItem key={image}>
                <Thumb
                    publicId={`${item.productAssets}${image}`}
                    onClick={() => setMainImg(image)}
                    active={Number(mainImg === image)}
                    width="140"
                    crop="scale"
                />
            </ThumbItem>
        ))}
    </ThumbContainer>
);

export default Thumbs;
