import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Character } from '../../interfaces';
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
         <h2>{character.name ? character.name : 'Name undefined'}</h2>
         <CharacterContainer>
            <ImageContainer>
               <img src={character.image} />
               <h3>{character.status}</h3>
               <h3>Especie: {character.species}</h3>
            </ImageContainer>
            <InfoContainer>
               <h3>Tipe: {character.type}</h3>
               <h3>Gender: {character.gender}</h3>
               <h3>Origin location: {character.origin.name}</h3>
               <h3>Last known location: {character.location.name}</h3>
               <h3>Character appeared episodes:</h3>
            </InfoContainer>
         </CharacterContainer>
         {epList}
      </Container>
   )
}

export default CharactersDetails;