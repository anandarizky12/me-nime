import React from 'react'

function Content({
    title, end, episodes, rated, type, image, airing
}) {
    return (
        <div>
                <img src={image} alt="" />            
        </div>
    )
}

export default Content
