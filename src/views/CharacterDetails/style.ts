import styled from 'styled-components'

export const Container = styled.div`

`
export const CharacterContainer = styled.div`
   /* padding-block: 2em; */
   display: flex;
   background: red;
   /* grid-template-columns: auto auto;
   grid-auto-rows: auto;
   grid-gap: 1em; */
   @media only screen and (max-width: 768px) {
      display: block;
  }
`

export const ImageContainer = styled.div`
   @media only screen and (max-width: 768px) {
      justify-content: center;
      align-items: center;
   }
   background: ${Props => Props.theme.colors.primary};
   padding: 1em;
   margin: 1em;
   border-radius: 5px;
   `
export const InfoContainer = styled.div`
   background: ${Props => Props.theme.colors.primary};
   padding: 2em;
   margin: 1em;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
`
