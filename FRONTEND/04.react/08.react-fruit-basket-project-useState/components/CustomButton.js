const CustomButton = ({
  label,
  buttonName,
  onClickHandler = () => {},
  isButtonDisable,
  children
}) => {
  return (
    <button
      title={buttonName}
      onClick={onClickHandler}
      disabled={isButtonDisable}
    >
      {children}
    </button>
  );
};

export default CustomButton;
