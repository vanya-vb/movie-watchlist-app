import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ title, setTitle, submitHandler }) {

    return (
        <form onSubmit={submitHandler} className="search-container">
            <div className="search-input">
                <FaSearch className='search-icon' />
                <input
                    type="search"
                    placeholder="Search for a movie"
                    className="search-input"
                    aria-label="Enter search term"
                    name="search"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button className="search-btn">Search</button>
        </form>
    );
}