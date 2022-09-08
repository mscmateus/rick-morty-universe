import Styled from 'styled-components'

export const Body = Styled.body`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   background-color: ${props => props.theme.colors.background};
   color: ${props => props.theme.colors.text};
   display: flex;
   flex-direction: column;
   height: 100vh;
`