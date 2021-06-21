import React, {useEffect , useState} from 'react';
import './style.css';
import Content from './Content'
import { getPosts } from '../../actions/index';
import {useDispatch,useSelector} from 'react-redux';

function Home() {

        //get data from store
        const dispatch = useDispatch();
        const [RandomPost, setRandomPost]=useState();

        useEffect(() => {
            //get recomendation anime '''
          dispatch(getPosts('top/anime/1/airing')); 
            
        }, []);
    
        //post data
        const posts = useSelector((state) => state.posts);
        const postsZ = posts.top
    

        const GetRandomPost = () => {
            const data = postsZ;
            if(data){
                const randomNum = Math.floor(Math.random()*data.length)
                console.log(randomNum)
                setRandomPost(data[randomNum]);
            }
         
          
        }
        useEffect(() => {
            GetRandomPost();
        }, [postsZ]);

        console.log(RandomPost)
    return (
        <div className="container-home">
            <div className="home-header">
                <p className="home-title">Hello, Welcome To <strong>Mi Nime</strong> </p>
                <p className="intro">Anime You Must Watch Today</p>
            </div>
            {RandomPost &&  <Content
                                    title={RandomPost.title} 
                                    type={RandomPost.type} 
                                    score={RandomPost.score}
                                    rank={RandomPost.rank}
                                    start_date={RandomPost.start_date}
                                    episodes={RandomPost.episodes}
                                    image={RandomPost.image_url}
                                    end={RandomPost.end_date}
                                    members={RandomPost.members}   
                                    id={RandomPost.mal_id}     
                            />
            }
            
            {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ee231188" class="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,600 C 0,600 0,400 0,400 C 205.71428571428572,514.2857142857143 822.8571428571429,457.14285714285717 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ee2311ff" class="transition-all duration-300 ease-in-out delay-150"></path></svg> */}
        </div>
    )
}

export default Home
