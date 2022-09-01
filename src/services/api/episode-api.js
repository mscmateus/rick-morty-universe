import api from '../../configs/api-config'
import axios from 'axios';

export const getEpisodeWithURL = (url) => {
    return new Promise((resolve, reject)=>{
        axios
            .get(url)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    })
}