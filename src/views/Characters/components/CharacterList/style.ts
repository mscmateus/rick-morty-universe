import styled from "styled-components";

export const List = styled.div`
  justify-content: center;
  padding-block: 2em;
  display: grid;
  grid-template-columns: 15em 15em 15em 15em;
  grid-auto-rows: 20em;
  grid-gap: 1em;
  color: ${props => props.theme.colors.primary};

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: 15em;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: 15em;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: 15em 15em ;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
      grid-template-columns: 15em 15em 15em;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 15em 15em 15em 15em;
  }

`
export const ListItem = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors["text-main"]};
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`