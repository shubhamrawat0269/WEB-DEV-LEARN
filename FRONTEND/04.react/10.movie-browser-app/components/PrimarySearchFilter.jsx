import { FaSearch } from "react-icons/fa";

const PrimarySearchFilter = () => {
  return (
    <div className="search-filter-container">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="search-input"
          // onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <select className="filter-select">
        <option value="" hidden>Filter by Genre</option>
        <option value="Europe">Suspense</option>
        <option value="Americas">Thriller</option>
        <option value="Asia">Romantic</option>
        <option value="Africa">Gore</option>
      </select>
    </div>
  )
}

export default PrimarySearchFilter;