import React from 'react'
import './Navbar.css'
function Searchpre({img,title,score,rated,date}) {

    function threedot(title,max){
        if(title.split('').length > max){
            return title.slice(0,max)+(' . . . ')
        }
        return title
    }

    return (
        <div className="ctn">
            <img src={img} alt="" />
            <div className="flex-search">
                    <p>{threedot(title,20)} ({rated} {date.slice(0,4)})</p>
                    <p>⭐{score}</p>
            </div>
          
        
        </div>
    )
}

export default Searchpre
