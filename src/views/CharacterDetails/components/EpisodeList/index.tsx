import React from "react";
import { Character } from "../../../../interfaces";
import ListItem from "../ListItem";
import { List } from "./style";

const EpisodeList: React.FC<{ list: string[] }> = ({ list }) => {
   return (
      <List>
         {list.map((url) => (
            <ListItem  episodeURL={url} />
         ))}
      </List>
   )
}

export default EpisodeList;