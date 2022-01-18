import React from 'react'

function MovieCard({posterUrl,title,type}) {
    return (
        <div>
            <img
            src={posterUrl}
            alt={`{title}poster`}/>
            <h2>{title}</h2>
            <span>{type}</span>
        </div>
    )
}

export default MovieCard

