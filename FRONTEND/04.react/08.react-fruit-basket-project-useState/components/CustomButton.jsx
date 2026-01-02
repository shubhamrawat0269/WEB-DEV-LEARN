const CustomButton = ({ label, disableButton, dispatch}) => {
  return (
    <button disabled={disableButton} onClick={dispatch}>{label}</button>
  )
}

export default CustomButton;