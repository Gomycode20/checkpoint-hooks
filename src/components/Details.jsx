import React from 'react'
import { useParams } from 'react-router'

const Details = ({ movies }) => {

    const { movieName } = useParams()

    const { trailerLink } = movies.find((movie) => movie.title == movieName)

    return (
        <div className='details'>
            <iframe width="560" height="315" src={trailerLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default Details