import React from 'react'
import {Link } from 'react-router-dom';
import './style.css'
function Content({title, type, score, rank, start_date, episodes, image, end, members, id}) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
       
            <div className="random-anime">
                <div className="random-anime-container">
                             <img src={image} />
                         
                            <div className="more">
                                <Link to={`/Details/${id}`} > 
                                    <div className="for-title">
                                            <p className="title" >{title}</p>
                                    </div>
                                </Link>
                                <div className="grid">
                                    <div className="small">
                                            <h4>Episodes</h4>
                                            <p className="small-child" >{episodes ? episodes : '-'}</p>
                                    </div>
                                    <div className="small">
                                            <h4>Rating</h4>
                                            <p className="small-child" >{score}</p>
                                    </div>
                                    <div className="small">
                                            <h4>Date</h4>
                                            <p className="small-child" >{start_date} - {end ? end : 'Unknown'}</p>
                                    </div>
                                    <div className="small">
                                            <h4>Type</h4>
                                            <p className="small-child" >{type}</p>
                                    </div>
                                    <div className="small">
                                            <h4>Members</h4>
                                            <p className="small-child" >{numberWithCommas(members)}</p>
                                    </div>
                                   
                                </div>
                             <div className="rank">
                                 <h2>#{rank}</h2>
                                 <p>Airing Rank</p>
                             </div>
            
                             
                            </div>
                        
                </div>
               
            </div>
     
    )
}

export default Content
