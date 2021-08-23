import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 5rem;
  padding: 2rem;

  @media (min-width: 320px) and (max-width: 600px) {
    margin: 1rem 0;
    justify-content: center;
  }
`;
