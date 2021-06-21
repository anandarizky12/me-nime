import React, { useEffect, useState } from 'react';
import './Navbar.css';
import {searchPosts} from '../../actions/index';
import Searchpre from './Search-pre';
import {SearchIcon, XIcon} from  '@heroicons/react/solid'
import LeftNav from '../Left-nav/LeftNav';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Navbar() {

    const [search,setsearch] = useState('');
    const [searchResult,setsearchResult]= useState([]);
    const [loading,setloading]= useState(true);

    const history = useHistory();
    const url = 'https://api.jikan.moe/v3';

    
   
    useEffect(() => {

        const searchPosts = (searchName) => {
                try{
                    axios.get(`${url}/search/anime?q=${searchName}`)
                    .then(res=>setsearchResult(res.data.results));

                    if(searchResult){
                        setloading(false)
                    }
                }
                catch(error){
                    alert(error)
                }
            };
        searchPosts(search);
    }, [search]);
  
    function onSubmit(e){
        e.preventDefault();
        history.push(`/Search/${search}`);
        setsearch('')

    }

    return (
        <div className="navbar">
                    
                    <div className="Logo">
                            <div className="Pa">
                                    <p>Mi Nime</p>
                            </div>
                            <LeftNav/>
                    </div>
                    <div className="for-searchandusername">
                        <form onSubmit={(e)=>onSubmit(e)} className="Search">
                            <SearchIcon className="search-logo" />
                            <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search Anime" /> 
                            {search.length > 0 &&
                                <>
                                 <div className="search-r">
                                        {loading && <p>Search . . .</p>}
                                        {searchResult  && searchResult.slice(0,5).map(data=>(
                                            <Searchpre img={data.image_url} 
                                                       rated={data.rated} 
                                                       date={data.start_date} 
                                                       title={data.title} 
                                                       id={data.mal_id}
                                                       score={data.score} 
                                                       setsearchResult={setsearch}
                                                       />
                                        ))}
                                          <p onClick={(e=>onSubmit(e))} className="seeall">See All Result</p>

                                 </div>
                                 <XIcon onClick={()=>setsearch('')} className="search-logo"/>
                                 </>  
                            }
                           
                        </form>
                        <div className="User">
                            <p>Jikan API</p>
                            <img src="https://jikan.moe/assets/images/logo/jikan.logo.png" alt="" />
                        </div>
                    </div>
        </div>
    )
}

export default Navbar
