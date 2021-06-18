
import * as api from '../api/index.js';


const SEARCH = 'SEARCH';
const FETCH_ALL = 'FETCH_ALL';


export const getPosts = (type) => async (dispatch) => {
  try {
    const  {data} = await api.fetchPosts(type);

    dispatch({ type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};


// export const searchPosts = (searchName) => async (dispatch) => {
//     try {
//       const { data } = await api.searchPosts(searchName);
  
//       dispatch({ type: SEARCH, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
  
