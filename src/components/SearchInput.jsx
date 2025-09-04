import { FaSearch } from 'react-icons/fa';

export default function SearchInput() {
    return (
        <div className="search-container">
            <div className="search-input">
                <FaSearch className='search-icon' />
                <input type="search" className="search-input" placeholder="Search for a movie" aria-label="Enter search term"
                    name="search" />
            </div>
            <button className="search-btn">Search</button>
        </div>
    );
}