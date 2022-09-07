import styled from 'styled-components';

export const Container = styled.footer`
   margin-top: auto;
   
   height: 5em;
   background-color: ${props => props.theme.colors.primary};
   color: #fff;   
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0.5em;
`