import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom";

export const List = styled.div`
  justify-content: center;
  padding-block: 2em;
  display: grid;
  grid-template-columns: 18em 18em 18em 18em;
  grid-auto-rows: auto;
  grid-gap: 1em;
  color: ${props => props.theme.colors.primary};

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: 18em;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: 18em;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: 18em 18em ;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
      grid-template-columns: 18em 18em 18em;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 18em 18em 18em 18em;
  }

`
export const ListItem = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors["text-main"]};
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`

export const CharacterImage = styled.img`
  width: 100%;
`
export const ImageLoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10em;
  align-items: center;
  justify-content: center;
  color: ${Props => Props.theme.colors.green};
`

export const CharacterName = styled(Link)`
  margin-top: 0.5em;
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
  color: ${Props => Props.theme.colors["text-main"]};
  &:hover {
    color: ${Props => Props.theme.colors.green}
  }
`

interface StatusProp {
  status: 'Dead' | 'Alive' | 'unknown'
}

export const CharacterStatusIcon = styled(AiFillHeart) <StatusProp>`
  font-size: 14px;
  margin-right: 0.5em;
  color: ${Props => {
    if (Props.status === 'Alive') {
      return '#2bbf1b'
    } else if (Props.status === 'Dead') {
      return '#bf1b1b'
    }
  }};
`

export const CharacterStatus = styled.h2`
  font-size: 14px;
  color: ${Props => Props.theme.colors["text-main"]};
  display: flex;
  margin-right: 0.5em;
`

export const CharacterType = styled.h2`
  margin-top: 0.5em;
  font-size: 14px;
  color: ${Props => Props.theme.colors.text};
  display: flex;
  margin-right: 0.5em;
  font-weight: unset;
`