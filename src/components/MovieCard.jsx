import {Link} from 'react-router-dom'

const MovieCard = ({ movie }) => {

    let stars = [];
    for (let i = 1; i <= movie.rating; i++) {
        stars.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
    }
    for (let i = movie.rating + 1; i <= 5; i++) {
        stars.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>);
    }

    return (
        <Link to={`/details/${movie.title}`} className='movie-card'>
            <img src={movie.poster} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <div className="rating">
                {stars}
            </div>
        </Link>
    );
};

export default MovieCard;
