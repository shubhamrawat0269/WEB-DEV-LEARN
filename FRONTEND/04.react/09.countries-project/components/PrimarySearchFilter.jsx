import { FaSearch } from "react-icons/fa";

const PrimarySearchFilter = ({ setQuery }) => {
  return (
    <div className="search-filter-container">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <select className="filter-select">
        <option value="" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default PrimarySearchFilter;