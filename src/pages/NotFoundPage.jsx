import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <main className="main">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/">home page</Link>
            </div>
        </main>
    );
};