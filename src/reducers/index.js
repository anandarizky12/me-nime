
const SEARCH = 'SEARCH';
const FETCH_ALL = 'FETCH_ALL';


export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case SEARCH:
      return action.payload;
    default:
      return posts;
  }
};