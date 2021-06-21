import React, {useEffect , useState} from 'react';
import axios from 'axios';
import './style.css';
import Content from './Content'

function SearchResult(props) {

    const [loading,setloading]= useState(true);
    const [searchResult,setSearchResults]= useState([]);
    const name=props.match.params.name;

    const url = 'https://api.jikan.moe/v3';
    useEffect(() => {

        const searchPosts = async() =>{
            try {
                const data= await     axios.get(`${url}/search/anime?q=${name}`)
                 .then(res=>{
                     setSearchResults(res.data.results);
                 })
                 
                 setloading(false)
             } catch (error) {
                setloading(false) 
                setSearchResults('error')
             }
           
        };
        searchPosts();
    }, [name]);
 
    console.log(searchResult)
    return (
        <div className="searchresult-container">
            <p className="searchHeader">Search Result</p>
            {loading && <p>Loading . . . </p>}
            {searchResult.map((data,i)=>(
                <Content title={data.title} 
                         end={data.end_date} 
                         episodes={data.episodes} 
                         rated={data.rated}
                         type={data.type}
                         image={data.image_url}
                         airing={data.airing}
                         />
            ))}

        </div>
    )
}

export default SearchResult
