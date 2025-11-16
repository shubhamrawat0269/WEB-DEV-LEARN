import FilterBox from "../filter/FilterBox";
import Searchbox from "../searchbox/Searchbox";
import styles from "./PrimaryHeader.module.css";

const PrimaryHeader = () => {
  return (
    <div className={styles.primaryContainer}>
      <Searchbox />
      <FilterBox />
    </div>
  );
};

export default PrimaryHeader;
