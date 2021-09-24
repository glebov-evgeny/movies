import React, {useState} from "react";

const Search = (props) => {
  const {
    searchMovies = Function.prototype,
    //значение по умолчанию, если не передана функция
  } = props;

  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')



  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type)
    setSearch(search, event.target.dataset.type)
    
  };


  return (
    <div className="input-field">
      <div className="input__container">
      <input
        className="validate"
        placeholder="search"
        type="search"
        value={search}
        onChange={(evtent) => setSearch(evtent.target.value )}
        onKeyDown={handleKey}
      />
      <button
        className="btn input__btn purple darken-4"
        onClick={() => searchMovies(search, type)}
      >
        Search
      </button>
      </div>
      <div>
        <label style={{ marginRight: "2rem" }}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label style={{ marginRight: "2rem" }}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies</span>
        </label>
        <label style={{ marginRight: "2rem" }}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series</span>
        </label>
      </div>


    </div>
  );
}


export { Search };
