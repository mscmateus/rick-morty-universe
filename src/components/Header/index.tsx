import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';

import { Container } from './style'

interface Props {
   toggleTheme(): void;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
   const { colors, title } = useContext(ThemeContext);
   return (
      <Container>
         <div>
            Rick And Morty Universe
            <Link to={""}>Teste</Link>
            <Link to={"character-list"}>Teste</Link>
         </div>
         <div>
            Search
            <Switch
               onChange={toggleTheme}
               checked={title === 'dark'}
               checkedIcon={false}
               uncheckedIcon={false}
               height={10}
               width={40}
               handleDiameter={20}
               offColor={colors.primary}
               onColor={colors.secundary}
            />
         </div>
      </Container>
   )
}

export default Header;
