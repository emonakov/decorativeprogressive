import styled from 'styled-components';

const PageWrapper = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 200px;
  grid-template-rows: auto;
  grid-template-areas:
    'hero hero hero'
    'text text text'
    'screen sofa bookshelf';
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 720px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'screen sofa';
    }
  }
`;

export default PageWrapper;
