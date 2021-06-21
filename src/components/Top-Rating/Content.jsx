import React from 'react';
import './style.css';
import {Link } from 'react-router-dom';


function Content({title, img, rating, episodes, type, id}) {
    return (
        <div className="content-top">  
                  <Link to={`/Details/${id}`} >    
                        <div className="imgNrating">
                            <img src={img} alt="" /> 
                        </div> 
                        <div className="content-text">
                                <p>{title}</p>
                                <p>{rating} ⭐</p>
                                <p>{type} ({episodes}  Eps)</p>
                        </div>
                    </Link>
               
        </div>
    )
}

export default Content
