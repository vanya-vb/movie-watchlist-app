import EmptyMovieList from "./EmptyMovieList";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, watchlist, setWatchlist, isHome = true }) {

    return (
        <section className={`movie-list-container ${movies.length > 0 && "movie-list-filled"}`}>
            {
                movies.length === 0 ?
                    (<EmptyMovieList />)
                    :
                    (movies.map(movie =>
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            watchlist={watchlist}
                            setWatchlist={setWatchlist}
                            isHome={isHome}
                        />))

            }
        </section>
    );
}