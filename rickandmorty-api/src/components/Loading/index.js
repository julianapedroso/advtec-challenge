import React from 'react';
import { Loader } from 'semantic-ui-react';
import { LoadingContainer } from './styles';

const Loading = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <LoadingContainer>
      <Loader>Loading</Loader>
    </LoadingContainer>
  );
};

export default Loading;
