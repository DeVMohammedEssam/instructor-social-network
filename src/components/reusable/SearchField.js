import React from "react";
const SearchField = ({
  placeholder = "",
  name = "",
  filter = "university"
}) => {
  return (
    <div className="input--search-container">
      <form>
        <input
          className="search-input"
          type="search"
          placeholder={placeholder}
          name="search"
        />
        <div className="search-icon__container">
          <span>{filter}</span>
          <button type="submit" className="search__submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
