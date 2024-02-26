import { useState } from "react";
import "./searchBar.css"

function Searchbar({getImages}) {
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(search)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter search term</label>
        <input value={search} onChange={(event) => setSearch(event.target.value)}/>
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default Searchbar;
