import FilterBox from "../filter/FilterBox";
import Searchbox from "../searchbox/Searchbox";
import styles from "./PrimaryHeader.module.css";

const PrimaryHeader = ({ queryText, setQueryText }) => {
  return (
    <div className={styles.primaryContainer}>
      <Searchbox queryText={queryText} setQueryText={setQueryText} />
      <FilterBox />
    </div>
  );
};

export default PrimaryHeader;
