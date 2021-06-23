import React from 'react';
import ReactPlayer from 'react-player';
import './style.css'


function Content({img, trailer, title, synopsis, score, status, more, 
                 premier, genre, duration, type, episodes, aired, 
                 japanese  , rank}) {
    return (
        <div className="container-detail-main">
            <p className="title-detail">{title}</p>
            <div className="container-detail">
                <img src={img} alt="" />
                <div className="details">
                    <div className="score">
                        <p>{score}</p>
                    </div>
                    <p> <strong>Rank</strong>  :   #{rank}</p>
                    <p> <strong>Japanese Title</strong>  :   {japanese}</p>
                    <p> <strong>Status</strong>  :   {status}</p>
                    <p> <strong>Duration</strong>  :   {duration}</p>
                    <p> <strong>Aired</strong>  :   {aired}</p>
                    <p> <strong>Premier</strong>  :   {premier}</p>
                    <p> <strong>Type</strong>  :   {type}</p>
                    <p> <strong>Episodes</strong>  :   {episodes ? episodes : '-'}</p>
                   
                </div>
            </div>
            <div className="synopsis">
                <div className="genre-container">
                        {genre.map((each,i)=>(
                                <div className="genre">
                                    {each.name}
                                </div>
                        ))}
                </div>
                
                <p> <strong>Synopsis</strong>  :   {synopsis}</p>
            
            </div>
            {/*Player video*/}
            <ReactPlayer 
                url={trailer}  
                light={true}
                width='100%'
                height='350px'
                />

        
        </div>
    )
}

export default Content
