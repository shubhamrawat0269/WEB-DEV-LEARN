import Card from "./Card";
import styles from "./CardGrid.module.css";

const CardGrid = () => {
  return (
    <div className={styles.bgColor}>
      <Card />
    </div>
  );
};

export default CardGrid;
