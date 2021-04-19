import React from "react";

class SearchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search Text"
              onChange={(e) => console.log(e.target.value)}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
