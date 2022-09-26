import Styled from 'styled-components'

export const Body = Styled.div`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   background-color: ${props => props.theme.colors.background};
   color: ${props => props.theme.colors.text};
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   `

export const MainContainer = Styled.main`
   @media screen and (max-width: 390px) {
      padding: 0;
      margin: 0;
   }
   padding-top: 3em;
   padding-bottom: 3em;
   padding-left: 2em ;
   padding-right: 2em;
   color: ${props => props.theme.colors['text-main']}
`