import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import PaginationFix from '../Pagination/Pagination';
import Filter from '../FIlter/Filter';
import Content from './Content';
import './style.css'

function TopRating() {

    const [type,settype]=useState({
        type: 'All',
    });
    const [postsdata,setpostsdata]=useState([]);
    //get data from store
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts('top/anime'));
       
    },[])


    const posts =  useSelector(state=>state.posts.top);


    async function Data(){
        const data = await posts
        const filteredData = await data.filter(data=>{
            if(type.type == "All") return data
            return data.type == type.type
        })
        setpostsdata(filteredData);
    }
    
    //call the function to get data
    useEffect(()=>{
        if(posts){
            Data()
        }
       },[posts,type]);

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
            <div className="Top">
                    <p className="toprating">Top Rating Anime</p>
                    <Filter type={type} set={settype}  />
            </div>
          
            {postsdata && postsdata.map((data,i)=>(
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
