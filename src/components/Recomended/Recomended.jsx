import React,{useEffect} from 'react'
import {getPosts,searchPosts} from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import Content from './Content';

function Recomended() {
    const dispatch = useDispatch();
 
    useEffect(() => {

      dispatch(getPosts());     
      
    }, []);

    const posts = useSelector((state) => state.posts);
    console.log(posts.recommendations)
    return (
        <div className='container-recomended-master'>
            <p className="recomended">Recomended Anime</p>
            
            <div className="recomended-container">
                    {posts.recommendations && posts.recommendations.slice(0,10).map((data,i)=>(
                             <Content key={i} 
                                    img={data.image_url} 
                                    id={data.mal_id} 
                                    title={data.title} 
                                    url={data.url}

                            />
                    ))}
            </div>
           
        </div>
    )
}

export default Recomended