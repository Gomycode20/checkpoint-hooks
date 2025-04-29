import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

function App() {

    const [movies, setMovies] = useState([
        {
            title: 'Moana',
            description: 'L aventure d une adolescente pleine de caractère qui part en mer pour se prouver qu elle a tout d une exploratrice et poursuivre la quête de ses ancêtres.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg',
            rating: 5,
        },
        {
            title: 'Black Bag',
            description: 'Lorsque Kathryn est soupçonnée de trahison envers la nation, George doit faire face à un dilemme déchirant : protéger son mariage ou défendre son pays.',
            poster: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:600/h:900/q:75/https://bleedingcool.com/wp-content/uploads/2025/03/black_bag_ver2_xxlg.jpg',
            rating: 4
        },
        {
            title: 'La Dolce Villa',
            description: 'Un homme d affaires prospère, Eric, se rend en Italie pour empêcher sa fille Olivia, de dépenser toutes ses économies dans la restauration d une villa en ruine qu elle a achetée pour un euro.',
            poster: 'https://fr.web.img2.acsta.net/img/37/b9/37b99b617df47125d2577dc6983c5494.jpg',
            rating: 3
        },
        {
            title: 'Le Robot sauvage',
            description: 'L incroyable épopée d un robot, l unité ROZZUM 7134 alias Roz , qui après avoir fait naufrage sur une île déserte, doit apprendre à s adapter à un environnement hostile en nouant petit à petit des relations avec les animaux de l île.',
            poster: 'https://movies.universalpictures.com/media/thewildrobot-poster-66686a8d0fd04-1.jpg',
            rating: 5
        },
        {
            title: 'iHostage',
            description: 'Lorsqu un homme armé pénètre dans un Apple Store au cœur d Amsterdam, la police est confrontée à un défi délicat pour résoudre l impasse.',
            poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyjyUEaNIYVbEMyxRbWushyPoNoDLf6xR7NbVHqwIVyIstSeJF',
            rating: 2
        },
        {
            title: 'Detective conan 25',
            description: 'Cependant, la cérémonie tourne au drame après l arrivée d un invité surprise venu s en prendre à à l heureuse élue, qui en réchappe miraculeusement.',
            poster: 'https://www.nautiljon.com/images/anime/00/85/detective_conan_movie_25_halloween_no_hanayome_10858.webp',
            rating: 5
        },
        {
            title: 'Blanche Neige',
            description: 'Une jeune princesse aux cheveux de jais possédait à sa naissance un tel teint de porcelaine qu elle a été baptisée Blanche-Neige. Malheureusement, sa grande beauté provoque la jalousie grandissante de la reine.',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            rating: 1
        },
        {
            title: 'G20',
            description: 'Sutton doit faire appel à son expérience diplomatique et militaire pour sauver sa famille, ses collègues leaders et la liberté.',
            poster: 'https://www.ecranlarge.com/content/uploads/2025/02/g20-affiche-officielle-scaled.jpg',
            rating: 2
        },
    ])

    return (
        <div className='app'>
            <MovieForm movies={movies} setMovies={setMovies}/>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App
