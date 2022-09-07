import React from "react";
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from "../../utils/usePersistedState";

import light from '../../style/theme/light';
import dark from '../../style/theme/dark';

import GlobalStyle from '../../style/global'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Body } from "./style";


const BaseLayout = ({Element}) => {
   const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
   const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light)
   }
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Body>
            <Header toggleTheme={toggleTheme} />
            <main>
               <Element />
            </main>
            <Footer />
         </Body>
      </ThemeProvider>
   )
}

export default BaseLayout;