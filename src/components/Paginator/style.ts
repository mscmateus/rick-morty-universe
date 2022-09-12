import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   small{
      margin: 0.5em;
      font-size: 1em;
   }
`
export const ContainerPaginator = styled.div`
   display: grid;
   align-items: center;
   justify-content: center;
   grid-template-columns: auto auto auto;
   grid-gap: 0.5em;
   grid-auto-rows: auto;
   @media only screen and (max-width: 600px) {
      grid-template-columns: auto;
   }
  /* Small devices (portrait tablets and large phones, 600px and up) */
   @media only screen and (min-width: 600px) {
      grid-template-columns: auto auto auto;
   }
`
export const ContainerLeft = styled.ul`
   display: flex;
   list-style: none;
   align-items: center;
   justify-content: center;
   `
export const ContainerNumbers = styled.ul`
   display: flex;
   list-style: none;
   align-items: center;
   justify-content: center;
   padding: 0;
   margin: 0;
`
export const ContainerRight = styled.ul`
   display: flex;
   list-style: none;
   align-items: center;
   justify-content: center;
`
type PageLinkProps = {
   active?: boolean
}
export const PageButton = styled.button <PageLinkProps>`
   display: block;
   padding: 1em;
   background-color: ${Props => (Props.active) ? Props.theme.colors.green : Props.theme.colors.primary};
   border-radius: 0.25em;
   color: ${Props => Props.theme.colors.text};
   text-decoration: none;
   margin-inline: 0.25em;
   font-weight: bold;
   &:hover {
      background-color: ${props => props.theme.colors.green};
      color: #fff;
      transition: 0.50s;
  }
`