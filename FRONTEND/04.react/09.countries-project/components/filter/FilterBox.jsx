import { useState } from "react";
import styles from "./FilterBox.module.css";

const FilterBox = () => {
  const [country, setCountry] = useState("");
  return (
    <div>
      <select
        className={styles.styledSelect}
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Filter by region</option>
        <option value="india">India</option>
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
      </select>
    </div>
  );
};

export default FilterBox;
