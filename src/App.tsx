import React, { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState';

import light from './style/theme/light';
import dark from './style/theme/dark';


import Header from './components/Header';
import Footer from './components/Footer';
import BaseLayout from './layout/BaseLayout';



function App() {
	return (
		<BaseLayout/>
	);
}

export default App;
