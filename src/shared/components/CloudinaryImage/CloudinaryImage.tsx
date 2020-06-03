import styled from 'styled-components';
import { Image } from 'cloudinary-react';

interface ImgProps {
    opacity?: number;
}

const Img = styled(Image)`
    max-width: 100%;
    opacity: ${(p: ImgProps) => p.opacity || 1};
    transition: opacity 0.2s ease-in;
    padding: ${({ theme }) => theme.contentPadding};
    box-sizing: border-box;

    &:hover {
        opacity: 1;
    }
`;

export default Img;
