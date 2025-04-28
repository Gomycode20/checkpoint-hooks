import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {

    return (
        <div className='movie-list'>
            {movies.map((movie, index)=> (
                <MovieCard movie={movie} key={index}/>
            ))}
        </div>
    )
}

export default MovieList