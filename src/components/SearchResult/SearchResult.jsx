import React from 'react'

function SearchResult(props) {
    const name=props.match.params.name
    console.log(name)
    return (
        <div>
            Search
        </div>
    )
}

export default SearchResult
