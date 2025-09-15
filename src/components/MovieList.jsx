import EmptyMovieList from "./EmptyMovieList";
import MovieCard from "./MovieCard";
import { ClipLoader } from "react-spinners";

export default function MovieList({ movies, watchlist, setWatchlist, isHome = true, loading }) {
    const override = {
        margin: '120px auto'
    }

    return (
        <section className={`movie-list-container ${movies.length > 0 && "movie-list-filled"}`}>
            {
                loading ? (
                    <ClipLoader
                        loading={loading}
                        color="darkorange"
                        size={70}
                        cssOverride={override}
                    />
                ) : movies.length === 0 ? (
                    <EmptyMovieList />
                ) : (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            watchlist={watchlist}
                            setWatchlist={setWatchlist}
                            isHome={isHome}
                        />
                    ))
                )
            }
        </section>
    );
}