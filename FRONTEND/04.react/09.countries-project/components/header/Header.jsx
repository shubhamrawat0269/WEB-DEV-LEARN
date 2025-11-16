import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span className={styles.logo}>Where in the world?</span>

        <span className={styles.modeBtn}>
          <button>Dark Mode</button>
        </span>
      </div>
    </div>
  );
};

export default Header;
