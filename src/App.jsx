import { useState } from "react";
import { Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';

import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";

function App() {
	const [title, setTitle] = useState('');
	const [movies, setMovies] = useState([]);
	const [watchlist, setWatchlist] = useState(() => {
		const watchlist = JSON.parse(localStorage.getItem('watchlist'));
		return watchlist || [];
	});
	const [isHome, setIsHome] = useState(true);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (title === '') {
			throw new Error('Enter a valid movie title.')
		}

		try {
			const response = await fetch(`http://www.omdbapi.com/?s=${title}&type=movie&apikey=1658edc3`);
			const data = await response.json();

			if (data.Search) {
				const detailedMovies = await Promise.all(
					data.Search.map(async (movie) => {
						const detailsRes = await fetch(`https://www.omdbapi.com/?apikey=1658edc3&i=${movie.imdbID}&plot=full`);

						return detailsRes.json();
					})
				)

				setMovies(detailedMovies);
			}

		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="body">
			<Header isHome={isHome} setIsHome={setIsHome} />

			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
				theme="dark"
			/>

			<Routes>
				<Route path="/" element={
					<HomePage
						movies={movies}
						title={title}
						setTitle={setTitle}
						submitHandler={submitHandler}
						watchlist={watchlist}
						setWatchlist={setWatchlist}
					/>}
				/>

				<Route path="/watchlist" element={
					<WatchlistPage
						watchlist={watchlist}
						setWatchlist={setWatchlist}
					/>}
				/>

			</Routes>
		</div>
	)
}

export default App
