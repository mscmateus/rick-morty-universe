import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

import { Container } from './style'


const Footer = () => {
   const { colors, title } = useContext(ThemeContext);
   return (
      <Container>
         Rick and Morty Universe<br />
         Developed by Mateus Costa
      </Container>
   )
}

export default Footer;
