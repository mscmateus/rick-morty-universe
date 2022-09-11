import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.nav`
   border-top: 1px solid ${props => props.theme.colors['text-main']};
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.text};
   text-align: center;

`
export const Link = styled(RouterLink)`
   color: ${props => props.theme.colors.text};
   padding-inline: 1em;
   padding-block: 1em;
   text-decoration: none;
   font-weight: bold;
   display: inline-block;
   &:hover {
      background-color: ${props => props.theme.colors.green};
      color: #fff;
      transition: 0.50s;
  }
`