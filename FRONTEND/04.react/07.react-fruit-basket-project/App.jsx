import ReactDOM from "react-dom/client";
import AppleCounter from "./components/AppleCounter";
import CustomButton from "./components/CustomButton";

let leftBasketApples = 10;
let rightBasketApples = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {

  const handleLeftShift = () => {
    if (leftBasketApples < 10) {
      leftBasketApples++;
      rightBasketApples--;
      console.log(leftBasketApples, 'LEFT')
      console.log(rightBasketApples, 'RIGHT')
      root.render(<App />);
    }
  }

  const handleRightShift = () => {
    if (rightBasketApples < 10) {
      leftBasketApples--;
      rightBasketApples++;
      console.log(leftBasketApples, 'LEFT')
      console.log(rightBasketApples, 'RIGHT')
      root.render(<App />);
    }
  }

  return (
    <div className="container">
      <AppleCounter count={leftBasketApples} label={`Basket 1`} />
      <CustomButton label={`Left Button`} disableButton={leftBasketApples === 10} dispatch={handleLeftShift} />
      <CustomButton label={`Right Button`} disableButton={rightBasketApples === 10} dispatch={handleRightShift} />
      <AppleCounter count={rightBasketApples} label={`Basket 2`} />
    </div>
  )
}

export default App;
// disableButton = { leftBasketApples === 10}
// disableButton = { rightBasketApples === 10}