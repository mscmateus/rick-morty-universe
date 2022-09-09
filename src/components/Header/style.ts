import styled from 'styled-components';

export const Container = styled.header`
   height: 5em;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.text};
   padding: 1.5em;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
`