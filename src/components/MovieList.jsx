import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {

    const [filtredMovies, setFiltredMovies] = useState(movies)

    useEffect(()=>{
        setFiltredMovies(movies)
    }, [movies])
    
    const ratingRef = useRef()

    const handleRatingChange = ()=>{
        const rating = ratingRef.current.value
        if(rating == "") return setFiltredMovies(movies)
        setFiltredMovies(movies.filter(movie => movie.rating == rating))
    }

    return (
        <div className='movie-list'>
            <select ref={ratingRef} onChange={handleRatingChange}>
                <option value="">all</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {filtredMovies.map((movie, index)=> (
                <MovieCard movie={movie} key={index}/>
            ))}
        </div>
    )
}

export default MovieList