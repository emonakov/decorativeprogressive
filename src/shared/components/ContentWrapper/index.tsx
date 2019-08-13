import styled from 'styled-components';

const ContentWrapper = styled.main`
    grid-area: content;
    padding: ${({ theme }) => theme.contentPadding};
    font-size: 1.1rem;
    text-align: justify;
`;

export default ContentWrapper;
