import React from "react";
import { Link } from "react-router-dom";
import { Character } from "../../../../interfaces";
import { CharacterImage, CharacterName, CharacterStatus, CharacterStatusIcon, CharacterType, List, ListItem as Container } from "../style";

const ListItem: React.FC<{ character: Character }> = ({ character }) => {
   return (
      <Container >
         <Link to={"/character-details"}>
            <CharacterImage src={character.image} />
         </Link>
         <CharacterName to={"/character-details"}>{character.name}</CharacterName>
         <div style={{ display: "flex" }}>
            <CharacterStatusIcon status={character.status} />
            <CharacterStatus>{character.status}</CharacterStatus>
         </div>
         <CharacterType>{character.type}</CharacterType>
      </Container>
   )
}

export default ListItem;