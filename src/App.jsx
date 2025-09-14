import { useState } from "react";
import Header from "./components/Header"

import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import WatchlistPage from "./pages/WatchlistPage";

function App() {
	const [title, setTitle] = useState('');
	const [movies, setMovies] = useState([]);
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

			<Routes>
				<Route path="/" element={
					<HomePage
						movies={movies}
						title={title}
						setTitle={setTitle}
						submitHandler={submitHandler}
					/>} />

				<Route path="/watchlist" element={<WatchlistPage />} />

			</Routes>
		</div>
	)
}

export default App
