import React from 'react'
import { useParams } from "react-router-dom";
import { Container, Section, CharacterImg, BasicData, CharacterData, BasicInfo, CharacterImage, EpisodesSection } from './style'
import { useHistory } from "react-router-dom";

import EpisodeItem from './components/episodeItem'
import Head from '../../components/headSearch'
import Copyright from '../../components/copyright'
import { getCharacter } from '../../services/api/character-api';
import { getEpisodeWithURL } from '../../services/api/episode-api';

export default function Character() {
    const { id } = useParams();
    const [character, setCharacter] = React.useState({})
    const [episodes, setEpisodes] = React.useState([])
    const [search, setSearch] = React.useState("")
    const history = useHistory()

    React.useEffect(() => {
        _getCharacter()
    }, [])
    function _getCharacter() {
        setCharacter(search)
        getCharacter(id)
            .then(response => {
                setCharacter(response)
                setEpisodes(getEpisodes(response.episode))
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function getEpisodes(urls) {
        let result = []
        urls.forEach(async (element) => {
            try {
                result.push(await getEpisodeWithURL(element))
            } catch (error) {
                console.log(error)
            }
        })
        return result
    }
    function handleSubmit(value) {
        history.push("/characters/?search=" + value)
    }
    return (
        <Container>
            <Head
                value={search}
                onSubmit={handleSubmit}
                placeholder={"Search by character name"}
            />
            <Section>
                <BasicData>
                    <CharacterImage>
                        <h1>{character.name}</h1>
                        <CharacterImg src={character.image} />
                    </CharacterImage>
                    <BasicInfo>
                        {character.location ? <h2>Last known location</h2> : <></>}
                        {character.location ? <h3>{character.location.name}</h3> : <></>}
                    </BasicInfo>
                </BasicData>
                <CharacterData>
                    {character.status ? <h2>Status</h2> : <></>}
                    {character.status ? <h3>{character.status}</h3> : <></>}

                    {character.species ? <h2>Species</h2> : <></>}
                    {character.species ? <h3>{character.species}</h3> : <></>}

                    {character.gender ? <h2>Gender</h2> : <></>}
                    {character.gender ? <h3>{character.gender}</h3> : <></>}

                    {character.type ? <h2>Type of subspecies</h2> : <></>}
                    {character.type ? <h3>{character.type}</h3> : <></>}

                    {character.origin ? <h2>Character's origin location</h2> : <></>}
                    {character.origin ? <h3>{character.origin.name}</h3> : <></>}
                </CharacterData>
            </Section>
            <EpisodesSection>
                {console.log(episodes)}
                {
                    episodes.map((episode) =>
                        <EpisodeItem
                        name={episode.name}
                        episode={episode.episode}
                        />
                    )
                }
            </EpisodesSection>
            <Copyright />
        </Container>
    )
}