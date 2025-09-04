import Header from "./components/Header"
import MovieList from "./components/MovieList"
import SearchInput from "./components/SearchInput"

function App() {

	return (
		<div className="body">
			<Header />

			<main className="main">
				<SearchInput />
				<MovieList />
			</main>
		</div>
	)
}

export default App
