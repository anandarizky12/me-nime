import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import './style.css';
import Content from './Content';


function News() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts("top/anime/1/upcoming"))
    },[]);

    const upcoming = useSelector(state=>state.posts);
    const data     = upcoming.top
    console.log(data)

    return (
        <div className="container-upcoming">
            <p className="upcoming-title">Upcoming</p>
        {!data && <p>Loading . . .</p>  }
        {data && data.map((data)=>{
           return ( 
            <Content 
            image = {data.image_url}
            title = {data.title}
            id= {data.mal_id}
            start = {data.start_date}
            type = {data.type}
            score ={data.score}
            members = {data.members}

                
         />
           ) 
          
        })}
        </div>
    )
}

export default News;
