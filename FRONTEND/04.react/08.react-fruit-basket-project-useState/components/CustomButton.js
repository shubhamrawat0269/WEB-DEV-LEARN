import styles from "./CustomButton.module.css";

console.log(styles);

const CustomButton = ({
  label,
  buttonName,
  onClickHandler = () => {},
  isButtonDisable,
  children,
}) => {
  return (
    <button
      title={buttonName}
      onClick={onClickHandler}
      disabled={isButtonDisable}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default CustomButton;
