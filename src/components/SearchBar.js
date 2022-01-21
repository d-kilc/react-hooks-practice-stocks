import React from "react";

function SearchBar({selectedSort, handleSort, handleFilter}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={selectedSort === 'alpha' ? true : false}
          onChange={() => handleSort('alpha')}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={selectedSort === 'price' ? true : false}
          onChange={() => handleSort('price')}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option disabled selected value>Select</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
