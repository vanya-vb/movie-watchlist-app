import { useState } from "react";
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import SearchInput from "./components/SearchInput"

function App() {
	const [title, setTitle] = useState('');
	const [movies, setMovies] = useState([]);

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
			<Header />

			<main className="main">
				<SearchInput
					title={title}
					setTitle={setTitle}
					submitHandler={submitHandler}
				/>
				<MovieList movies={movies} />
			</main>
		</div>
	)
}

export default App
