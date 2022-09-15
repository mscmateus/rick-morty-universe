import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Character } from "../../../../interfaces";
import { CharacterImage, CharacterName, CharacterStatus, CharacterStatusIcon, CharacterType, ImageLoadingContainer, List, ListItem as Container } from "../style";

const ListItem: React.FC<{ character: Character }> = ({ character }) => {
   const [loading, setLoading] = useState(true)
   const onLoadHandle = () => {
      // setTimeout(() => {
         setLoading(false)
      // }, 2000)
   }
   useEffect(()=>{
      console.log("Imagem mudou")
      console.log(!loading)
      setLoading(true)
   },[character.image])
   return (<Container >
      {loading ? <ImageLoadingContainer>
         <BounceLoader />
      </ImageLoadingContainer> : null}
      <Link to={"/character-details"} style={{ display: !loading ? 'block' : 'none' }}>
         <CharacterImage src={character.image} onLoad={onLoadHandle} />
      </Link>
      <CharacterName to={"/character-details"}>{character.name}</CharacterName>
      <div style={{ display: "flex" }}>
         <CharacterStatusIcon status={character.status} />
         <CharacterStatus>{character.status}</CharacterStatus>
      </div>
      <CharacterType>{character.type}</CharacterType>
   </Container>)
}

export default ListItem;