import React from "react";
import { Character } from "../../../../interfaces";
import ListItem from "../ListItem";
import { List } from "../style";

const CharacterList: React.FC<{ list: Character[] }> = ({ list }) => {
   return (
      <List>
         {list.map((character) => (
            <ListItem key={character.id} character={character} />
         ))}
      </List>
   )
}

export default CharacterList;