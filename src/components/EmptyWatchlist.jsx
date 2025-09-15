import { Link } from "react-router";

import { FaCirclePlus } from "react-icons/fa6";

export default function EmptyWatchlist() {
    return (
        <div className="empty-watchlist">
            <p className="initial-msg">Your watchlist is looking a little empty...</p>
            <Link to='/' className="add-movie-link">
                <FaCirclePlus /> Let's add some movies!
            </Link>
        </div>
    );
};