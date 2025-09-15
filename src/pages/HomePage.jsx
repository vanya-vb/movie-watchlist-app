import { useContext } from "react";
import { Context } from "../App";

import MovieList from "../components/MovieList"
import SearchInput from "../components/SearchInput"

export default function HomePage() {
    const { movies } = useContext(Context);

    return (
        <main className={`main ${movies.length > 0 && "main-filled"}`}>
            <SearchInput />
            <MovieList movies={movies} />
        </main>
    );
};