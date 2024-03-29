import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Container } from './style'


const Footer = () => {
   let ano = new Date()
   return (
      <Container>
         Rick and Morty Universe<br />
         &#169; {ano.getFullYear()} Developed by <Link to="https://github.com/mscmateus">Mateus Costa</Link>
      </Container>
   )
}

export default Footer;
