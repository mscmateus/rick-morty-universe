import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

import { Container } from './style'

interface Props { }
const Header: React.FC<Props> = () => {
   const { colors, title } = useContext(ThemeContext);
   return (
      <Container>
         Rick And Morty Universe
      </Container>
   )
}

export default Header;
