function App() {

	return (
		<div className="body">

			<header>
				<h1 className="title">Find your film</h1>
				<p className="list">
					<a href="#">My Watchlist</a>
				</p>
			</header>

			<main className="main">
				<div className="search-container">
					<div className="search-input">
						<i className="fas fa-search" role="img" aria-hidden="true"></i>
						<input type="search" className="search-input" placeholder="Search for a movie" aria-label="Enter search term"
							name="search" />
					</div>
					<button className="search-btn">Search</button>
				</div>

				<section className="movie-list-container">
					{/* <!-- Movies will be inserted here --> */}
					<div className="no-movies">
						<img src="/src/assets/movie-icon.png" className="movie-icon" alt="Movie icon" />
						<p className="initial-msg">Start exploring</p>
					</div>
				</section>

			</main>

		</div>
	)
}

export default App
