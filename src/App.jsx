import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

function App() {

    const [movies, setMovies] = useState([])

    return (
        <div className='app'>
            <MovieForm movies={movies} setMovies={setMovies}/>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App
