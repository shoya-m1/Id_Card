import { Link } from "react-router-dom";

function Search({onChangeSearch}) {

  const changeSearch = (event)=>{
    const value = event.target.value;
    onChangeSearch(value);
  }

  return (
    <>
      <h1>Create Id Card Virtual</h1>
      <div className="search">
        <Link to="/form">
          <button>Add Id Card</button>
        </Link>
        <input
          onChange={changeSearch}
          type="text"
          id="inputSearch"
          placeholder="Cari nama id card . . . . ."
        />
      </div>
    </>
  );
}
export default Search;
