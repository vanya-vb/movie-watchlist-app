import { useContext, useEffect } from "react";
import { Context } from "../App";

import EmptyWatchlist from "../components/EmptyWatchlist";
import MovieList from "../components/MovieList";

export default function WatchlistPage() {
    const { watchlist, setWatchlist } = useContext(Context);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    return (
        <main className={`main ${watchlist.length > 0 && "main-filled"}`}>
            <section className="watchlist-container">
                {
                    watchlist.length > 0 ?
                        (<MovieList movies={watchlist} isHome={false} />)
                        :
                        (<EmptyWatchlist />)
                }
            </section>
        </main>
    );
};
