import { useState, useEffect } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Trigger search whenever searchTerm changes
        onSearch(searchTerm);
    }, [searchTerm, onSearch]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search entries..."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default Search;
