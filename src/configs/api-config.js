import axios from "axios";

export const BASEURL = "https://rickandmortyapi.com/api/"

const api = axios.create({
  baseURL: BASEURL,
});

export default api;