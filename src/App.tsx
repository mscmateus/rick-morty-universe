import React, { useEffect, useState } from 'react';

import Routers from './routers/routers';
import { GlobalStateProvider } from './utils/globalStateProvider';

function App() {
	return (
		<GlobalStateProvider>
			<Routers />
		</GlobalStateProvider>
	);
}

export default App;
