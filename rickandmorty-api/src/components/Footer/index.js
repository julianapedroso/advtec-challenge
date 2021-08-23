import React from 'react';
import { Header } from 'semantic-ui-react'
import { Wrapper } from './styled';

const Footer = () => {
  return (
    <footer>
      <Wrapper>
      <div>
        <Header as='h3'>
          Aplicação desenvolvida com ❤️ por{" "}
          <a
            href="https://github.com/julianapedroso"
            target="_blank"
          >
            Juliana Pedroso
          </a>
        </Header>
        <Header as='h3'>
            <strong>Processo Seletivo | ADV Tecnologia</strong>
            <br />
        </Header>
      </div>
    </Wrapper>
    </footer>
  )
}

export default Footer;