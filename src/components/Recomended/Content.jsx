import React from 'react'
import './style.css'
function Content({key, img, id, title, url}) {
    
    function threedot(title,max){
        if(title.split('').length > max){
            return title.slice(0,max)+(' . . . ')
        }
        return title
    }
    
    return (
        <div className="recomended-content">
            <img src={img} alt="" />
            <p>{threedot(title,25)}</p>
        </div>
    )
}

export default Content
