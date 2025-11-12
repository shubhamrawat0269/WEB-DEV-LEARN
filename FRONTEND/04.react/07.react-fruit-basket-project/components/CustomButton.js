const CustomButton = ({
  label,
  buttonName,
  onClickHandler = () => {},
  // isButtonDisable,
}) => {
  return (
    <button
      title={buttonName}
      onClick={onClickHandler}
      // disabled={isButtonDisable}
    >
      {label}
    </button>
  );
};

export default CustomButton;
