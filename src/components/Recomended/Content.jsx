import React from 'react'
import './style.css'
import {Link } from 'react-router-dom';


function Content({key, img, id, title, url}) {
    
    function threedot(title,max){
        if(title.split('').length > max){
            return title.slice(0,max)+(' . . . ')
        }
        return title
    }
    
    return (
        <div className="recomended-content">
            <Link to={`/Details/${id}`} >   
                <img src={img} alt="" />
                <p>{threedot(title,25)}</p>
            </Link>
        </div>
    )
}

export default Content
