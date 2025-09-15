import { useContext } from "react";
import { Context } from "../App";
import { ClipLoader } from "react-spinners";

import EmptyMovieList from "./EmptyMovieList";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    const { loading } = useContext(Context);

    const override = {
        margin: '120px auto'
    };

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
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                )
            }
        </section>
    );
}