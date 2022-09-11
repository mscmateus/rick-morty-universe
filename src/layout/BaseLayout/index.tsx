import React from "react";
import { ThemeProvider } from 'styled-components'
import usePersistedState from "../../utils/usePersistedState";

import light from '../../style/theme/light';
import dark from '../../style/theme/dark';

import GlobalStyle from '../../style/global'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Body, MainContainer } from "./style";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../../components/NavigationMenu";

type Props = {
   children: React.ReactNode,
};
const BaseLayout: React.FC = () => {
   const [theme, setTheme] = usePersistedState<string>('theme', light.title)
   const toggleTheme = () => {
      setTheme(theme === light.title ? dark.title : light.title)
   }
   return (
      <ThemeProvider theme={theme === light.title ? light : dark}>
         <GlobalStyle />
         <Body>
            <Header toggleTheme={toggleTheme} />
            <NavigationMenu />
            <MainContainer>
               <Outlet />
            </MainContainer>
            <Footer />
         </Body>
      </ThemeProvider>
   )
}

export default BaseLayout;