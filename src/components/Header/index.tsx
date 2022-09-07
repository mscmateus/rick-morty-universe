import React, { useContext } from 'react'
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
         Rick And Morty Universe
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
      </Container>
   )
}

export default Header;
