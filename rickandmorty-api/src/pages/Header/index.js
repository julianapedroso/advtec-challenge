import React from 'react';
import { Image } from 'semantic-ui-react';
import { Wrapper } from './styles';
// assets
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <>
      <Wrapper>
        <Image src={Logo} alt='Logo Rick and Morty' />
      </Wrapper>
    </>
  );
};

export default Header;
