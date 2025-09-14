import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

export default function MovieCard({ movie }) {
    const [fullDescription, setFullDescription] = useState(false);

    let description = movie.Plot;

    if (!fullDescription) {
        description = description.substring(0, 200) + '...';
    }

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
                        className="add-to-watchlist-btn"
                        aria-label={`Add ${movie.Title} to watchlist`}>
                        <FaCirclePlus /> Watchlist
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