import React from 'react';
import { Image } from 'semantic-ui-react';
import { Wrapper } from './styles';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Image src={Logo} alt='Logo Rick and Morty' />
      </Wrapper>
    </header>
  );
};

export default Header;
