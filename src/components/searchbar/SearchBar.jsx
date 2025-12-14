import './SearchBar.css';

function SearchBar ({value, onChange}) {
    return (
        <div className="searchbar">
            <p>Zoek</p>
            <input
                type="text"
                placeholder="Search cocktails..."
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar;