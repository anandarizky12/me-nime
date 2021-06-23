import React from 'react'
import content from './Content'
import './LeftNav.css'
import {Link,NavLink} from 'react-router-dom';

function LeftNav() {
    return (
        <div className="Left-nav">
            <div className="main-left">
                {content.map(((data,i)=>(
                       <NavLink key={i} activeClassName="each-nav-title active" className="each-nav-title" exact to={`/${data.link}`} >
                                <div className="title-Navside">
                                    {data.icon}
                                    <p>{data.title}</p>
                                </div>   
                        </NavLink>
                )))}
            </div>
            <div className="center-line">
                    <div  className="underline"/>
            </div>
        </div>
    )
}

export default LeftNav

