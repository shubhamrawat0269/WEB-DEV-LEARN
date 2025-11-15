import styles from "./CustomButton.module.css";

const AppleCounter = ({ value, label }) => {
  return (
    <section className="basket">
      <span>{value}</span>
      <p className={styles.para}>
        {label} {value === 10 ? "(FULL)" : value === 0 ? "(EMPTY)" : ""}
        {value === 5 && "(HALF FULL)"}
      </p>
    </section>
  );
};

export default AppleCounter;
