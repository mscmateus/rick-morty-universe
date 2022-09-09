import styled from 'styled-components';

export const Container = styled.footer`
   margin-top: auto;
   height: 5em;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.text};
   text-align: center;
   padding: 1em;
`