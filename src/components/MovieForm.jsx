import React, { useRef } from 'react'

const MovieForm = ({movies, setMovies}) => {

    const titleRef = useRef()
    const descRef = useRef()
    const posterRef = useRef()
    const ratingRef = useRef()

    const handleAdd = () =>{
        const newMovie = {
            title: titleRef.current.value,
            description: descRef.current.value,
            rating: ratingRef.current.value,
            poster: posterRef.current.value,
        }
        setMovies([...movies, newMovie])
    }

    return (
        <div className='movie-form'>
            <input type="text" placeholder='title' ref={titleRef}/>
            <input type="text" placeholder='description' ref={descRef}/>
            <input type="number" placeholder='rating' ref={ratingRef}/>
            <input type="url" placeholder='poster url' ref={posterRef}/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default MovieForm