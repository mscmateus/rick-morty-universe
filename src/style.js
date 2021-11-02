import {createGlobalStyle} from 'styled-components'

import BackGroundImage from './assets/imgs/background.png'

export const App = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        border: 0;
        background-image: url(${BackGroundImage});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;