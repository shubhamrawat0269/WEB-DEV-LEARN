import styles from "./CardGrid.module.css";

const Card = ({ country }) => {
  const { name, flag, population, region, capital } = country;

  return (
    <article className={styles.card}>
      <img
        src={flag}
        alt={`Flag of ${name}`}
        loading="lazy"
        className={styles.flag}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>

        <ul className={styles.infoList}>
          <li>
            <span className={styles.label}>Population: </span>
            <span>
              {typeof population === "number"
                ? population.toLocaleString()
                : population}
            </span>
          </li>

          <li>
            <span className={styles.label}>Region: </span>
            <span>{region ?? "—"}</span>
          </li>

          <li>
            <span className={styles.label}>Capital: </span>
            <span>
              {Array.isArray(capital) ? capital.join(", ") : capital ?? "—"}
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
