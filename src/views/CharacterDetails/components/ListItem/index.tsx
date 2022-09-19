import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Episode } from "../../../../interfaces";
import { Container } from "./style";

const ListItem: React.FC<{ episodeURL: string }> = ({ episodeURL }) => {
   const [episode, setEpisode] = useState<Episode>({
      id: 0,
      name: '',
      url: '',
      created: '',
      air_date: '',
      episode: '',
      character: []
   })
   useEffect(() => {
      axios.get(episodeURL)
         .then((response) => {
            setEpisode(response.data)
         })
   }, [])
   return (
      <Container >
         <ul>
            <li>{episode.name}</li>
            <li>{episode.episode}</li>
            <li>{episode.air_date}</li>
         </ul>
      </Container>
   )
}

export default ListItem;