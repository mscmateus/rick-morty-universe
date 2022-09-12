import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Character } from "../../../../interfaces";
import { CharacterImage, CharacterName, CharacterStatus, CharacterStatusIcon, CharacterType, List, ListItem as Container } from "../style";

const ListItem: React.FC<{ character: Character }> = ({ character }) => {
   const [render, setRender] = useState((<></>))
   const handleImageLoaded = () => {
      console.log('image loaded');
   }
   useEffect(() => {
      setRender((
         <Container >
            <Link to={"/character-details"}>
               <CharacterImage src={character.image} onLoad={handleImageLoaded} />
            </Link>
            <CharacterName to={"/character-details"}>{character.name}</CharacterName>
            <div style={{ display: "flex" }}>
               <CharacterStatusIcon status={character.status} />
               <CharacterStatus>{character.status}</CharacterStatus>
            </div>
            <CharacterType>{character.type}</CharacterType>
         </Container>
      ))
   }, [character,])
   return render
}

export default ListItem;