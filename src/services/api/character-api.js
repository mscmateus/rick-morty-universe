import api from '../../configs/api-config'
import axios from 'axios';

export const getCharacters = (page) => {
    return new Promise((resolve, reject)=>{
        api
            .get("/character/?page="+page)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    })
}

export const getCharactersWithURL = (url) => {
    return new Promise((resolve, reject)=>{
        axios
            .get(url)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    })
}

export const getCharacter = (characterId) => {
    return new Promise((resolve, reject)=>{
        api
            .get("/character/"+characterId)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    })
}

export const getCharacterByName = (characterName,page) => {
    return new Promise((resolve, reject)=>{
        api
            .get("/character/?page="+page+"&name="+characterName)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    })
}