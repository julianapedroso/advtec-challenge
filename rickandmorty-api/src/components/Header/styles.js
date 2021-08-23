import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;

  img {
    margin-top: 1.5rem;
    width: 30%;

    @media (min-width: 320px) and (max-width: 600px) {
      width: 60%;
      display: flex;
      justify-content: center;
    }
  }
`;
