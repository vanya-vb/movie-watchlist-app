export default function EmptyMovieList() {
    return (
        <div className="no-movies">
            <img src="/src/assets/movie-icon.png" className="movie-icon" alt="Movie icon" />
            <p className="initial-msg">Start exploring</p>
        </div>
    );
}