import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import './style.css'


function PaginationFix({setCurrentPage, postsPerPage, post, currentPage}) {

     //to handle the change pagination
     const handleChange = (event, value) => {
        setCurrentPage(value);
      };

    return (
        <div className="Pagination" >
                {post &&

                    <Pagination 
                        // className={classes.root}
                        count={post.length / postsPerPage} 
                        defaultPage={1} 
                        color={'textprimary'}
                        color={'secondary'}
                        boundaryCount={3} 
                        page={currentPage} 
                        onChange={handleChange} 
                    />
                
                }
            </div>
    )
}

export default PaginationFix
