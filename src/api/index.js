import axios from 'axios';

const url = 'https://api.jikan.moe/v3';

export const fetchPosts = () => axios.get(`${url}/anime/1/recommendations`);
export const searchPosts = (searchName) => axios.get(`${url}/search/anime?q=${searchName}`);
