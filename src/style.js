import {styled,createGlobalStyle} from 'styled-components'

import BackGroundImage from './assets/imgs/background.png'

export const App = createGlobalStyle`
    body{
        margin: 0;
        background-image: url(${BackGroundImage});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
`;

