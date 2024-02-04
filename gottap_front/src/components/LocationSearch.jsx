import React, { useState } from 'react';

const LocationSearch = ({ onSearch }) => {

    const [search, setSearch] = useState('')
    const [searchError, setSearchError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)
        return;

    };""


    return (

        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input className='searchBar'
                    type="text"
                    placeholder="ADD YOUR LOCATION"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button className='searchBarArea-btn' type="submit">Submit</button>
                {searchError && <p className="error-message">{searchError}</p>}
            </form>
        </div>

    );
};

export default LocationSearch;