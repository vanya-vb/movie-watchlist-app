import { createContext, useState } from "react";
import { Routes, Route } from "react-router";
import { toast, ToastContainer } from 'react-toastify';

import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import NotFoundPage from "./pages/NotFoundPage";

const Context = createContext();

function App() {
	const [title, setTitle] = useState('');
	const [movies, setMovies] = useState([]);
	const [watchlist, setWatchlist] = useState(() => {
		const watchlist = JSON.parse(localStorage.getItem('watchlist'));
		return watchlist || [];
	});
	const [isHome, setIsHome] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (title === '') {
			setError("Enter a valid movie title.");

			return;
		}

		try {
			setLoading(true);
			setError(null);
			setMovies([]);

			const response = await fetch(`/api/fetchMovies?q=${encodeURIComponent(title)}`);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			if (data.Response === 'False') {
				throw new Error(data.Error || 'No movies found');
			}

			const detailedMovies = await Promise.all(
				data.Search.map(async (movie) => {
					const detailsRes = await fetch(`/api/fetchMovies?q=${movie.imdbID}&type=detail`);

					if (!detailsRes.ok) {
						throw new Error(`Failed to fetch details for ${movie.Title}`);
					}

					return detailsRes.json();
				})
			);

			setMovies(detailedMovies);
		} catch (err) {
			console.error(err);
			setError(err.message || 'Something went wrong. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Context.Provider value={{ title, setTitle, movies, setMovies, submitHandler, watchlist, setWatchlist, isHome, setIsHome, loading, setLoading, error }}>

			<div className="body">
				<Header />

				<ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					theme="dark"
				/>

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/watchlist" element={<WatchlistPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
			
		</Context.Provider>
	)
}

export default App
export { Context }
