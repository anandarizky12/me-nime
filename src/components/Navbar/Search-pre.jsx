import React from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css';


function Searchpre({img,title,score,rated,date, id, setsearchResult}) {

    function threedot(title,max){
        if(title.split('').length > max){
            return title.slice(0,max)+(' . . . ')
        }
        return title
    }


    function Reload(){
        setsearchResult([])
    }

    return (
        <Link to={`/Details/${id}`} >    
                <div onClick={()=>Reload()} className="ctn">
                    
                            <img src={img} alt="" />
                            <div className="flex-search">
                                    <p>{threedot(title,35)}</p>
                                    {date &&   <p> ({rated} - {date.slice(0,4)})</p>}
                                
                                    <p>⭐{score}</p>
                            </div>
                </div>
         </Link>
     
    )
}

export default Searchpre
