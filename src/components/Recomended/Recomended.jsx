import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import Content from './Content';

import PaginationFix from '../Pagination/Pagination';

function Recomended() {

    const [postsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    //get data from store
    const dispatch = useDispatch();

    useEffect(() => {
        //get recomendation anime '''
      dispatch(getPosts('anime/1/recommendations')); 

    }, [dispatch]);

    //post data
    const posts = useSelector((state) => state.posts);
    const postRe = posts.recommendations
    //for pagination purpose
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const totalpagination = postRe.length / postsPerPage;
   
    return (
        <div className='container-recomended-master'>
            <p className="recomended">Recomended Anime</p>
            <div className="recomended-container">
                    { postRe &&  postRe.length < 1 && <p>Loading . . . </p> }
                    { postRe &&  postRe.slice(indexOfFirstPost, indexOfLastPost).map((data,i)=>(
                             <Content key={i} 
                                    img={data.image_url} 
                                    id={data.mal_id} 
                                    title={data.title} 
                                    url={data.url}

                            />
                    ))}
            </div>
            
            <PaginationFix setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} post={postRe} currentPage={currentPage} />
            
           
        </div>
    )
}

export default Recomended