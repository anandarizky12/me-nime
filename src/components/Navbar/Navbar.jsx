import React, { useEffect, useState } from 'react';
import './Navbar.css';
import {searchPosts} from '../../actions/index';
import Searchpre from './Search-pre';
import {SearchIcon, XIcon} from  '@heroicons/react/solid'
import LeftNav from '../Left-nav/LeftNav';
import axios from 'axios';


function Navbar() {

    const [search,setsearch] = useState('');
    const [searchResult,setsearchResult]= useState([]);
    const [loading,setloading]= useState(true);
    
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
  
    console.log(loading,searchResult)
    return (
        <div className="navbar">
                    
                    <div className="Logo">
                            <div className="Pa">
                                    <p>Mi Nime</p>
                            </div>
                            <LeftNav/>
                    </div>
                    <div className="for-searchandusername">
                        <div className="Search">
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
                                          <p className="seeall">See All Result</p>

                                 </div>
                                 <XIcon onClick={()=>setsearch('')} className="search-logo"/>
                                 </>  
                            }
                           
                        </div>
                        <div className="User">
                            <p>Ahmed</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRu80qW9PfZFE4ZarfdaMOCSTRSb47R15MRQ&usqp=CAU" alt="" />
                        </div>
                    </div>
        </div>
    )
}

export default Navbar
