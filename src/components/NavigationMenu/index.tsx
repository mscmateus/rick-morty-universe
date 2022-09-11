import React from 'react'

import { Container, Link } from './style'


const NavigationMenu = () => {
   return (
      <Container>
         <Link to={""}>Home</Link>
         <Link to={"character-list"}>Character List</Link>
      </Container>
   )
}

export default NavigationMenu;
