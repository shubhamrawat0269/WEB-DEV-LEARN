import Card from "./Card";
import styles from "./CardGrid.module.css";

const CardGrid = () => {
  return (
    <div className={styles.cardContainer}>
      <Card />
    </div>
  );
};

export default CardGrid;
