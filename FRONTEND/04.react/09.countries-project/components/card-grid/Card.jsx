import styles from "./CardGrid.module.css";

const Card = ({ country }) => {
  const { common, official } = country;

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>Country Name : {common}</h3>

        <ul className={styles.infoList}>
          <li>
            <span className={styles.label}>Official Name: </span>
            <span>
              {official}
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
