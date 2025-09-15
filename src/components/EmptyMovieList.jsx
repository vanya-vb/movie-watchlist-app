import { useContext } from "react";
import { Context } from "../App";

import movieIcon from '../assets/movie-icon.png';

export default function EmptyMovieList() {
    const { error } = useContext(Context);

    return (
        <div className="no-movies">
            {
                error ?
                    (<p className="initial-msg">{error}</p>)
                    :
                    (
                        <>
                            <img src={movieIcon} className="movie-icon" alt="Movie icon" />
                            <p className="initial-msg">Start exploring</p>
                        </>
                    )
            }

        </div>
    );
}