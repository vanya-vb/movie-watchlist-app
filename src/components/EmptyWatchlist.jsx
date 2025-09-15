import { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../App";

import { FaCirclePlus } from "react-icons/fa6";

export default function EmptyWatchlist() {
    const { setIsHome } = useContext(Context);

    return (
        <div className="empty-watchlist">
            <p className="initial-msg">Your watchlist is looking a little empty...</p>
            <Link to='/' onClick={() => setIsHome(true)} className="add-movie-link">
                <FaCirclePlus /> Let's add some movies!
            </Link>
        </div>
    );
};