import React from 'react';
import { Loader, Image } from 'semantic-ui-react';
import { LoadingContainer } from './styles';
import ImageLoading from '../../assets/loading.gif';

const Loading = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <LoadingContainer>
      <Loader>
        <Image src={ImageLoading} alt='GIF loading' />
      </Loader>
    </LoadingContainer>
  );
};

export default Loading;
