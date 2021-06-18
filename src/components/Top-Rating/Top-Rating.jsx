import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import PaginationFix from '../Pagination/Pagination';
import Content from './Content';
import './style.css'

function TopRating() {
    //get data from store
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts('top/anime'))
    },[])
    const posts = useSelector(state=>state.posts) 
    const newpost = posts.top

    console.info(newpost)
    return (
        //end_data
        //episodes
        //image_url
        //rank
        //score
        //start_date
        //title
        //type
        <div className="container-toprating-master">
            <p className="toprating">Top Rating Anime</p>
            <input type="d" />
            {newpost && newpost.map((data,i)=>(
                <Content title={data.title}
                         img={data.image_url}
                         rating={data.score}
                         startDate={data.start_date}
                         episodes={data.episodes}
                         type={data.type}
                />
            ))}
        </div>
    )
}

export default TopRating
