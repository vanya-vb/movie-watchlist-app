import { createContext, useState } from "react";
import { Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';

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

	const submitHandler = async (e) => {
		e.preventDefault();

		if (title === '') {
			throw new Error('Enter a valid movie title.')
		}

		try {
			setLoading(true);
			const response = await fetch(`http://www.omdbapi.com/?s=${title}&type=movie&apikey=1658edc3`);
			const data = await response.json();

			if (data.Search) {
				const detailedMovies = await Promise.all(
					data.Search.map(async (movie) => {
						const detailsRes = await fetch(`https://www.omdbapi.com/?apikey=1658edc3&i=${movie.imdbID}&plot=full`);

						return detailsRes.json();
					})
				);

				setMovies(detailedMovies);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Context.Provider value={{ title, setTitle, movies, setMovies, submitHandler, watchlist, setWatchlist, isHome, setIsHome, loading, setLoading }}>
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
