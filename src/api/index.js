import axios from 'axios';

const url = 'https://api.jikan.moe/v3';
//top anime
// top/anime

//recomendations
// anime/1/recommendations


export const fetchPosts = (type) => axios.get(`${url}/${type}`);
export const searchPosts = (searchName) => axios.get(`${url}/search/anime?q=${searchName}`);
