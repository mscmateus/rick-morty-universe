import styled from 'styled-components';

export const Container = styled.header`
   height: 5em;
   background-color: ${props => props.theme.colors.primary};
   color: #fff;
   padding: 0.5em;
   
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`