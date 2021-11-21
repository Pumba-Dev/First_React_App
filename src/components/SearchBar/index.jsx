import "./styles.css";

export const SearchBar = ({handleChange, searchValue}) => {
    return (
        <input 
            className="search-bar"
            onChange={handleChange}
            value ={searchValue}
            type="search"
            placeholder="Type to Search"
        />
    );
}   