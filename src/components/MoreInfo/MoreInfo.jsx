import React, {useEffect , useState} from 'react';
import axios from 'axios';
import Content from './Content';

function MoreInfo(props) {


    const id=props.match.params.id
    const [loading,setloading]= useState(true);
    const [details,setdetails]= useState();

    useEffect(() => {

        const searchPosts = async() =>{
            try {
                const data= await axios.get(`https://api.jikan.moe/v3/anime/${id}`)
                 .then(res=>{
                     setdetails(res.data);
                 })
                 
                 setloading(false)
             } catch (error) {
                setloading(false) 
                setdetails('error')
             }
           
        };

        searchPosts();
   
    }, [id]);
  
    console.log(details)
    return (
        <div className="moreinfo">
            {loading && <h1>Loading . . . </h1>}
            {details &&
                <div className="">
                    <Content img={details.image_url}
                             trailer={details.trailer_url}
                             title={details.title}
                             synopsis={details.synopsis}
                             score={details.score}
                             status={details.status}
                             more={details.url}
                             premier={details.premiered}
                             genre={details.genres}
                             duration={details.duration}
                             type={details.type}
                             episodes={details.episodes}
                             aired={details.aired.string}
                             rank={details.rank}
                             japanese={details.title_japanese}
                    />
                </div>
            }
            {details == 'error' &&
            <h1>Sorry, Data not Found</h1>
            }
        </div>
    )
}

export default MoreInfo
