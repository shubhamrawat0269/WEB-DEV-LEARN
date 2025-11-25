import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>My Companies</h1>
        <button>Dark Mode</button>
      </div>
    </div>
  );
};

export default Header;
