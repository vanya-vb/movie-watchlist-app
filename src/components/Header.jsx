import { Link } from "react-router";
import { Context } from "../App";
import { useContext } from "react";

export default function Header() {
    const {isHome, setIsHome} = useContext(Context);

    return (
        <header>
            <h1 className="title">Find your film</h1>
            <p className="list">
                <Link to={isHome ? '/watchlist' : '/'}
                    onClick={() => setIsHome(!isHome)}
                >
                    {isHome ? 'My Watchlist' : 'Search Movies'}
                </Link>
            </p>
        </header>
    );
}