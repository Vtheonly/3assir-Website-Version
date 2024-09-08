import React from "react";


export function SearchBar() {

    return (

        <div class="searchBarSect">
            <input className="Near" type="text" placeholder="Search...Near Algeria, Harach..." />
            <input className="MaxPrice" type="number" placeholder="Max price" />
            <button className="SearchButton">Search</button>
        </div>



    );
}

export default SearchBar;
