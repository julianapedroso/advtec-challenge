import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
  }
`;
