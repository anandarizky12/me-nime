import React from 'react';
import {Link } from 'react-router-dom';

function Content({id, image, title, start, type , score, members}) {
    return (
        <Link to={`/Details/${id}`} >   
                <div>
                    <img src={image} alt="" />
                    <div className="">
                        <p>{title}</p>
                        <p>{members}</p>
                        <p>{start}</p>
                    </div>
                
                </div>
        </Link>
    )
}

export default Content
