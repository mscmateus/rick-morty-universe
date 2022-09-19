import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom";

export const Container = styled.div`
   color: ${Props => Props.theme.colors["text-main"]};
   display: flexbox;
   flex-direction: column;
   border-radius: 5px;
   padding: 1em;
   border: 1px solid ${Props => Props.theme.colors["text-main"]};
   ul{
      list-style: none;
   }
`