import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Container } from './style'


const NavigationMenu = () => {
   let ano = new Date()
   return (
      <Container>
         <Link to={""}>Teste</Link>
         <Link to={"character-list"}>Teste</Link>
      </Container>
   )
}

export default NavigationMenu;
