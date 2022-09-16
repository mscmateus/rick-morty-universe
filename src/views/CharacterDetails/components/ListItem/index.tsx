import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Episode } from "../../../../interfaces";
import { CharacterImage, CharacterName, CharacterStatus, CharacterStatusIcon, CharacterType, ImageLoadingContainer, List, ListItem as Container } from "../style";

const ListItem: React.FC<{ episodeURL: string }> = ({ episodeURL }) => {
   const [loaded, setLoaded] = useState(false)
   const [episode, setEpisode] = useState<Episode>()
   const onLoadHandle = () => {
      setLoaded(true)
   }
   useEffect(() => {
      setLoaded(false)

   }, [])
   return loaded ?
      (<Container >
         <Link to={"/character-details/" + episode.id}>
            <episodeImage src={episode.image} onLoad={onLoadHandle} />
         </Link>
         <CharacterName to={"/character-details/" + episode.id}>{episode.name}</episodeName>
         <div style={{ display: "flex" }}>
            <CharacterStatusIcon status={episode.status} />
            <CharacterStatus>{episode.status}</CharacterStatus>
         </div>
         <CharacterType>{episode.type}</CharacterType>
      </Container>
      ) : (
         <Container >
            <ImageLoadingContainer>
               <BounceLoader />
            </ImageLoadingContainer>
            <Link to={"/episode-details/" + episode.id} style={{ display: 'none' }}>
               <CharacterImage src={episode.image} onLoad={onLoadHandle} />
            </Link>
            <CharacterName to={"/episode-details/" + episode.id}>{episode.name}</CharacterName>
            <div style={{ display: "flex" }}>
               <CharacterStatusIcon status={episode.status} />
               <CharacterStatus>{episode.status}</CharacterStatus>
            </div>
            <CharacterType>{episode.type}</CharacterType>
         </Container>
      )
}

export default ListItem;