import { useState } from "react";
import { toast } from 'react-toastify';

import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

export default function MovieCard({ movie, watchlist, setWatchlist, isHome }) {
    const [fullDescription, setFullDescription] = useState(false);

    let description = movie.Plot;

    if (!fullDescription) {
        description = description.substring(0, 200) + '...';
    }

    const addToWatchlist = (id) => {
        const newMovie = {
            imdbID: id,
            Title: movie.Title,
            Poster: movie.Poster,
            Genre: movie.Genre,
            imdbRating: movie.imdbRating,
            Runtime: movie.Runtime,
            Plot: movie.Plot,
        };

        setWatchlist(prevWatchlist => {
            const exists = prevWatchlist.some(movie => movie.imdbID === newMovie.imdbID);

            if (exists) {
                toast.error(`${newMovie.Title} is already added in watchlist!`);
                return prevWatchlist;
            }

            const updatedWatchlist = [...prevWatchlist, newMovie];
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

            toast.success(`${newMovie.Title} successfully added to watchlist!`);

            return updatedWatchlist;
        });
    };

    const removeMovie = (id) => {
        const confirmDelete = window.confirm(`Are you sure you want to remove ${movie.Title} from watchlist?`);

        if (confirmDelete) {
            toast.success(`${movie.Title} removed from watchlist!`);
            setWatchlist(watchlist.filter(movie => movie.imdbID !== id));
        }
    };

    return (
        <article className="movie-card">
            <div className="movie-img-container">
                <img src={movie.Poster} className="poster-img" alt={`Poster of ${movie.Title}`} />
            </div>

            <div className="movie-info">
                <h2 className="movie-title">
                    {movie.Title}
                    <span className="rating" aria-label={`Rating: ${movie.imdbRating}`}>
                        <img src="/src/assets/star-icon.png" alt="Star icon" />{movie.imdbRating}</span>
                </h2>

                <div className="movie-description">
                    <span className="movie-duration">{movie.Runtime}</span>
                    <span className="movie-genre">{movie.Genre}</span>
                    <button
                        onClick={isHome ? () => addToWatchlist(movie.imdbID) : () => removeMovie(movie.imdbID)}
                        className="add-to-watchlist-btn"
                        aria-label={`Add ${movie.Title} to watchlist`}>
                        {
                            // fix here
                            isHome ? <FaCirclePlus /> : < FaCircleMinus />
                        }
                        {
                            isHome ? 'Watchlist' : 'Remove'
                        }
                    </button>
                </div>
                <p className="movie-summary">{description}
                    <button
                        className="plot-btn"
                        onClick={() => setFullDescription(prevState => !prevState)}
                    >
                        {fullDescription ? 'read less' : 'read more'}
                    </button>
                </p>
            </div>
        </article>
    );
}