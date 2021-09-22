import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  handleFilter = (event) => {
    this.setState(
        () => ({type: event.target.dataset.type}),
        () => {this.props.searchMovies(
            this.state.search,
            this.state.type
        )}
    );
  };

  render() {
    return (
      <div className="input-field">
        <div className="input__container">
        <input
          className="validate"
          placeholder="search"
          id="email_inline"
          type="search"
          value={this.state.search}
          onChange={(evtent) => this.setState({ search: evtent.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          className="btn input__btn purple darken-4"
          onClick={() => this.props.searchMovies(this.state.search)}
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
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label style={{ marginRight: "2rem" }}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label style={{ marginRight: "2rem" }}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>


      </div>
    );
  }
}

export { Search };
