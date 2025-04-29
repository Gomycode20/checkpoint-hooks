import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {

    const [filtredMovies, setFiltredMovies] = useState(movies)

    useEffect(() => {
        setFiltredMovies(movies)
    }, [movies])

    const ratingRef = useRef()

    const handleRatingChange = () => {
        const rating = ratingRef.current.value
        if (rating == "") return setFiltredMovies(movies)
        setFiltredMovies(movies.filter(movie => movie.rating == rating))
    }

    const titleRef = useRef()

    const handleTitleChange = () => {
        const title = titleRef.current.value.toLowerCase();
        setFiltredMovies(
            movies.filter(movie =>
                movie.title.toLowerCase().includes(title)
            )
        );
    };

    return (
        <div className='movie-container'>
            <div className='filter'>
                <select ref={ratingRef} onChange={handleRatingChange}>
                    <option value="">All</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="filter-title">
                <input
                    type="text"
                    placeholder="Search movie title..."
                    ref={titleRef}
                    onChange={handleTitleChange}
                    className="filter-text"
                />
            </div>

            <div className='movie-list'>
                {filtredMovies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </div>


        </div>

    )

}

export default MovieList