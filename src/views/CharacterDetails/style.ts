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
   padding: 2em;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${Props => Props.theme.colors.primary};
`

export const CharacterInfos = styled.div`
   display: flex;
   @media screen and (max-width: 768px){
      display: flex;
      flex-direction: column;
   }
`

export const CharacterImage = styled.img`
   @media screen and (max-width: 768px){
      width: 100%;
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
   padding-block: 2em;
   display: block;
   flex-direction: column;
`


