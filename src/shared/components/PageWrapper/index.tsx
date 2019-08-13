import styled from 'styled-components';

const PageWrapper = styled.main`
    margin: 0 auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "hero hero hero"
        "menubar menubar menubar"
        "content content content"
        "left center right";
    max-width: 1280px;
    margin: 0 auto;

    @media (max-width: 768px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                "hero hero"
                "menubar menubar"
                "content content"
                "left center"
                "right right";
        }
    }

    @media (max-width: 720px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                "hero hero"
                "menubar menubar"
                "content content"
                "left left"
                "center center"
                "right right";
        }
    }
`;

export default PageWrapper;
