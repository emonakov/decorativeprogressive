import styled from "styled-components";
import { wrapperBackground } from "../../colors";

const PageWrapper = styled.section`
    background: ${wrapperBackground};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "hero hero hero"
        "text text text"
        "left center right";
    max-width: 1280px;
    margin: 0 auto;

    @media (max-width: 720px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                "hero hero"
                "left center"
                "left right";
        }
    }
`;

export default PageWrapper;
