import styled from 'styled-components';

interface ImgProps {
    opacity?: number;
}

const Img = styled.img`
    max-width: 100%;
    opacity: ${(p: ImgProps) => p.opacity || 1};
    transition: opacity 0.2s ease-in;
    padding: 20px;
    box-sizing: border-box;

    &:hover {
        opacity: 1;
    }
`;

export default Img;
