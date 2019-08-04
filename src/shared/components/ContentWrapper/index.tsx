import styled from 'styled-components';

const ContentWrapper = styled.section`
    grid-area: content;
    padding: ${({ theme }) => theme.contentPadding};
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.mainFont}, sans-serif;
    text-align: justify;
`;

export default ContentWrapper;
