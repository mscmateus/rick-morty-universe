import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Character } from '../../interfaces';
import EpisodeList from './components/EpisodeList';
import { Container, InfoContainer, CharacterContainer, ImageContainer } from './style';

// const defaultCharacter = 
const CharactersDetails = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState<Character>({
      id: 0,
      name: '',
      url: '',
      created: '',

      status: "unknown",
      species: '',
      type: '',
      gender: "unknown",
      origin: { name: '', url: '' },
      location: { name: '', url: '' },
      image: '',
      episode: []
   });
   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/' + id)
         .then((response) => {
            setCharacter(response.data)
            console.log(response.data.episode)
         })
   }, [])
   let epList = (
      <ul>
         {character.episode.map((episodeTittle) => (
            <li>{episodeTittle}</li>
         ))}
      </ul>
   )
   return (
      <Container>
         <h1>Character Details</h1>
         <CharacterContainer>
            <ImageContainer>
               <h2>Name: {character.name ? character.name : 'Name undefined'}</h2>
               <img src={character.image} />
            </ImageContainer>
            <InfoContainer>
               <h3>Details</h3>
               <ul>
                  <li>{character.status}</li>
                  <li>Especie: {character.species}</li>
                  <li>Tipe: {character.type}</li>
                  <li>Gender: {character.gender}</li>
                  <li>Origin location: {character.origin.name}</li>
                  <li>Last known location: {character.location.name}</li>
               </ul>
            </InfoContainer>
            <InfoContainer>
               <h3>Character appeared episodes:</h3>
               <EpisodeList list={character.episode}/>
            </InfoContainer>
         </CharacterContainer>
      </Container>
   )
}

export default CharactersDetails;