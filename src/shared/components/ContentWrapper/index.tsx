import styled from 'styled-components';

const ContentWrapper = styled.main`
    grid-area: content;
    padding: ${({ theme }) => theme.contentPadding};
    font-size: 1.1rem;
    text-align: justify;

    p {
        letter-spacing: 0.5px;
        line-height: 30px;
        font-size: 1.3rem;
    }
`;

export default ContentWrapper;
