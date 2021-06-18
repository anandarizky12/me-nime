import React from 'react'
import './style.css'

function Content({title, img, rating, episodes, type}) {
    return (
        <div className="content-top">  
                <div className="imgNrating">
                     <img src={img} alt="" /> 
                </div> 
                 <div className="">
                        <p>{title}</p>
                        <p>{rating} ⭐</p>
                        <p>{type} ({episodes}  Eps)</p>
                 </div>
               
        </div>
    )
}

export default Content
