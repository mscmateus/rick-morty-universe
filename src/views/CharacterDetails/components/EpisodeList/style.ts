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
    grid-template-columns: 100%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: 100%;
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