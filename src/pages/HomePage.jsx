import MovieList from "../components/MovieList"
import SearchInput from "../components/SearchInput"

export default function HomePage({ movies, title, setTitle, submitHandler }) {
    return (
        <main className={`main ${movies.length > 0 && "main-filled"}`}>
            <SearchInput
                title={title}
                setTitle={setTitle}
                submitHandler={submitHandler}
            />
            <MovieList movies={movies} />
        </main>
    );
};