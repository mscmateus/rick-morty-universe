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

export const MainContainer = Styled.main`
   padding-top: 3em;
   padding-bottom: 3em;
   padding-left: 2em ;
   padding-right: 2em;
`