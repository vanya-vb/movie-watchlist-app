import { Link } from "react-router";

export default function Header({ isHome, setIsHome }) {
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