export default function MovieCard({ movie }) {

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
                        <img src="/src/assets/add-icon.png" alt="Plus icon" />
                        Watchlist
                    </button>
                </div>
                <p className="movie-summary">{movie.Plot}</p>
            </div>
        </article>
    );
}