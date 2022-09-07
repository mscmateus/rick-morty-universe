import React, { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState';

import light from './style/theme/light';
import dark from './style/theme/dark';

import GlobalStyle from './style/global'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light)
	}
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header toggleTheme={toggleTheme} />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
