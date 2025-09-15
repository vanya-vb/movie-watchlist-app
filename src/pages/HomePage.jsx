import MovieList from "../components/MovieList"
import SearchInput from "../components/SearchInput"

export default function HomePage({ movies, title, setTitle, submitHandler, watchlist, setWatchlist, loading }) {
    return (
        <main className={`main ${movies.length > 0 && "main-filled"}`}>
            <SearchInput
                title={title}
                setTitle={setTitle}
                submitHandler={submitHandler}
            />
            <MovieList movies={movies} watchlist={watchlist} setWatchlist={setWatchlist} loading={loading} />
        </main>
    );
};