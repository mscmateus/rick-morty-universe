import Styled from 'styled-components'

export const Body = Styled.body`
   background-color: ${props => props.theme.colors.background};
   color: ${props => props.theme.colors.text};
   display: flex;
   flex-direction: column;
   height: 100vh;
`