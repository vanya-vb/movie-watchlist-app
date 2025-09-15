import { useEffect } from "react";

import EmptyWatchlist from "../components/EmptyWatchlist";
import MovieList from "../components/MovieList";

export default function WatchlistPage({ watchlist, setWatchlist }) {

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    return (
        <main className={`main ${watchlist.length > 0 && "main-filled"}`}>
            <section className="watchlist-container">
                {
                    watchlist.length > 0 ?
                        (<MovieList movies={watchlist} watchlist={watchlist} setWatchlist={setWatchlist} isHome={false} />)
                        :
                        (<EmptyWatchlist />)
                }

            </section>
        </main>
    );
};
