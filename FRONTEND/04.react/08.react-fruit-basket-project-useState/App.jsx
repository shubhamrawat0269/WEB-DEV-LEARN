import React from "react";
import AppleCounter from "./components/AppleCounter";
import CustomButton from "./components/CustomButton";

const App = () => {
  const [leftBasketApple, setLeftBasketApple] = React.useState(10);
  const [rightBasketApple, setRightBasketApple] = React.useState(0);

  const handleLeftShift = () => {
    setLeftBasketApple(leftBasketApple + 1); 
    setRightBasketApple(rightBasketApple - 1);
  }

  const handleRightShift = () => {
    setLeftBasketApple(leftBasketApple - 1);
    setRightBasketApple(rightBasketApple + 1);
  }

  return (
    <div className="container">
      <AppleCounter count={leftBasketApple} label={`Basket 1`} />
      <CustomButton label={`Left Button`} disableButton={leftBasketApple === 10} dispatch={handleLeftShift} />
      <CustomButton label={`Right Button`} disableButton={rightBasketApple === 10} dispatch={handleRightShift} />
      <AppleCounter count={rightBasketApple} label={`Basket 2`} />
    </div>
  )
}

export default App;