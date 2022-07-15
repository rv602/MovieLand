import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

// cf86722

// const API_URL = 'http://www.omdbapi.com?apikey=cf86722';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cf86722'

const movie1 = {
    Poster: "N/A",
    Title: "The Amazing Spiderman T4 Premiere Special",
    Type: "movie",
    Year: "2012",
    imdbID: "tt2233044"
}

function App() {

    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

        // console.log(data.Search);
        setMovie(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder='Search for movies' value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
                <img src={SearchIcon} alt="" onClick={() => searchMovies(search)} />
            </div>

            {
                movie?.length > 0
                    ? (
                        <div className="container">
                            {movie.map((movie) => {
                                return <MovieCard movie={movie} />
                            })}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>no movies found</h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;
