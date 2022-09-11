import React from "react";
import { Character } from "../../../../interfaces";
import { CharacterImage, CharacterName, CharacterStatus, CharacterStatusIcon, CharacterType, List, ListItem as Container } from "../style";

const ListItem: React.FC<{ character: Character }> = ({ character }) => {
   return (
      <Container >
         <CharacterImage src={character.image} />
         <CharacterName>{character.name}</CharacterName>
         <div style={{ display: "flex" }}>
            <CharacterStatusIcon status={character.status} />
            <CharacterStatus>{character.status}</CharacterStatus>
         </div>
         <CharacterType>{character.type}</CharacterType>
      </Container>
   )
}

export default ListItem;