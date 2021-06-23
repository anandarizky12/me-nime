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
    const [loading,setloading]=useState(true)
    //get data from store
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts('top/anime/1/bypopularity'));
       
    },[])


    const posts =  useSelector(state=>state.posts.top);


    async function Data(){
        const data = await posts
        const filteredData = await data.filter(data=>{
            if(type.type == "All") return data
            return data.type == type.type
        })
        setloading(false)
        setpostsdata(filteredData);
    }
    
    //call the function to get data
    useEffect(()=>{
        if(posts){
            Data()
        }
       },[posts,type]);
   
    return (

        <div className="container-popularity-master">
            <div className="popularity">
                    <p className="">Most Popular Anime</p>
                    <Filter type={type} set={settype}  />
            </div>
            {loading && <p>Loading . . . </p>}
            {postsdata.length < 1 && <p>No Result</p>}
            {postsdata && postsdata.map((data,i)=>(
                <Content title={data.title}
                         img={data.image_url}
                         rating={data.score}
                         startDate={data.start_date}
                         episodes={data.episodes}
                         type={data.type}
                         id={data.mal_id}
                />
            ))}
        </div>
    )
}

export default TopRating
