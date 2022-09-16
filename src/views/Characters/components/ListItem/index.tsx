import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Character } from "../../../../interfaces";
import { CharacterImage, CharacterName, CharacterStatus, CharacterStatusIcon, CharacterType, ImageLoadingContainer, List, ListItem as Container } from "../style";

const ListItem: React.FC<{ character: Character }> = ({ character }) => {
   const [loaded, setLoaded] = useState(false)
   const onLoadHandle = () => {
      setLoaded(true)
   }
   useEffect(() => {
      setLoaded(false)
   }, [character.image,])
   return loaded ?
      (<Container >
         <Link to={"/character-details/" + character.id}>
            <CharacterImage src={character.image} onLoad={onLoadHandle} />
         </Link>
         <CharacterName to={"/character-details/" + character.id}>{character.name}</CharacterName>
         <div style={{ display: "flex" }}>
            <CharacterStatusIcon status={character.status} />
            <CharacterStatus>{character.status}</CharacterStatus>
         </div>
         <CharacterType>{character.type}</CharacterType>
      </Container>
      ) : (
         <Container >
            <ImageLoadingContainer>
               <BounceLoader />
            </ImageLoadingContainer>
            <Link to={"/character-details/" + character.id} style={{ display: 'none' }}>
               <CharacterImage src={character.image} onLoad={onLoadHandle} />
            </Link>
            <CharacterName to={"/character-details/" + character.id}>{character.name}</CharacterName>
            <div style={{ display: "flex" }}>
               <CharacterStatusIcon status={character.status} />
               <CharacterStatus>{character.status}</CharacterStatus>
            </div>
            <CharacterType>{character.type}</CharacterType>
         </Container>
      )
}

export default ListItem;