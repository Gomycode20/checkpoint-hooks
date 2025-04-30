import React, { useRef } from 'react'

const MovieForm = ({movies, setMovies}) => {

    const titleRef = useRef()
    const descRef = useRef()
    const posterRef = useRef()
    const ratingRef = useRef()
    const trailerRef = useRef()

    const handleAdd = () =>{
        const newMovie = {
            title: titleRef.current.value,
            description: descRef.current.value,
            rating: parseInt(ratingRef.current.value),
            poster: posterRef.current.value,
            trailerLink: trailerRef.current.value
        }
        setMovies([...movies, newMovie])
    }

    

    return (
        <div className='movie-form'>
            <input type="text" placeholder='Title' ref={titleRef}/>
            <input type="text" placeholder='Description' ref={descRef}/>
            <input type="number" placeholder='Rating' ref={ratingRef}/>
            <input type="url" placeholder='Poster' ref={posterRef}/>
            <input type="url" placeholder='Trailer Link' ref={trailerRef}/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default MovieForm