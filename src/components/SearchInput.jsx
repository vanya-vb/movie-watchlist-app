import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from '../App';

export default function SearchInput() {
    const { title, setTitle, submitHandler } = useContext(Context);

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