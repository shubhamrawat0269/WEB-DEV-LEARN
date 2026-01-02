const CustomButton = ({ label, disableButton, dispatch}) => {
  return (
    <button title={label} disabled={disableButton} onClick={dispatch}>{label}</button>
  )
}

export default CustomButton;