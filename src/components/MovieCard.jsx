export default function MovieCard() {
    return (
        <article className="movie-card">
            <div className="movie-img-container">
                <img src="/src/assets/movie-icon.png" className="poster-img" alt="Poster of {movie.Title}" />
            </div>

            <div className="movie-info">
                <h2 className="movie-title">
                    Title
                    <span className="rating" aria-label="Rating: ${movie.imdbRating}">
                        <img src="/src/assets/star-icon.png" alt="Star icon" />0</span>
                </h2>

                <div className="movie-description">
                    <span className="movie-duration">120min</span>
                    <span className="movie-genre">Genre</span>
                    <button
                        className="add-to-watchlist-btn"
                        // data-movie-id=${movie.imdbID}
                        aria-label="Add ${movie.Title} to watchlist">
                        <img src="/src/assets/add-icon.png" alt="Plus icon" />
                        Watchlist
                    </button>
                </div>
                <p class="movie-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in tempore ullam.</p>
            </div>
        </article>
    );
}