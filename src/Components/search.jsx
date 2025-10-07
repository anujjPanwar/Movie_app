import { useState } from "react";

function Search({ setSearch, sendText }) {
  const searchText = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div className="serchBox">
      <input type="text" onChange={searchText} />
      <button onClick={sendText}>Search</button>
    </div>
  );
}
export default Search;
