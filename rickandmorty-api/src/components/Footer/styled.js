import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #4839dc;
  position: absolute;
  min-width: 100%;
  height: 12vh;
  color: #fff;

  @media (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    font-size: 0.75rem;
  }

  a {
    color: #f2903e;
    text-decoration: none;
  }
`;
