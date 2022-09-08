import React, { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState';

import Routers from './routers/routers';



function App() {
	return (
		<Routers/>
	);
}

export default App;
