import styled from 'styled-components'

export const Container = styled.div`
   h1{
      margin-bottom: 0.75em;
   }
   h2{
      margin-bottom: 0.5em;
   }
`
export const CharacterContainer = styled.div`
   display: flexbox;
   padding: 1em;
   border-radius: 0.5em;
   background: ${Props => Props.theme.colors.primary};
   @media screen and (max-width: 992px) {
      border-radius: 0.5em;
      display: block;
      justify-content: center;
      align-items: center;
      padding: 1em;
   }
`

export const ImageContainer = styled.div`
   display: block;
   @media screen and (max-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`
export const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 2em;
   @media only screen and (max-width: 768px) {
      margin-top: 2em;
      margin-left: 0;
   }
   h3{
      margin-bottom: 0.5em;
   }
   ul{
      list-style: none;
      li{
         margin-bottom: 0.25em;
      }
   }
`
export const EpisodeContainer = styled.div`
   display: block;
   flex-direction: column;
`
