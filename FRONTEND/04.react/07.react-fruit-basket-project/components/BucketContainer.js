import ReactDOM from "react-dom/client";
import AppleCounter from "./AppleCounter";
import CustomButton from "./CustomButton";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const totalApples = 10;
let basketTwoApple = 0;
let basketOneApple = 10;

const BucketContainer = () => {
  // const [transferApple, setTransferApple] = useState(0);

  const handleLeftBasket = () => {
    if (basketOneApple < 10) {
      basketOneApple++;
      basketTwoApple = totalApples - basketOneApple;

      console.log(basketOneApple, "ONE");
      console.log(basketTwoApple, "TWO");
      root.render(<BucketContainer />);
    }
  };
  const handleRightBasket = () => {
    if (basketTwoApple < 10) {
      basketTwoApple++;
      basketOneApple = totalApples - basketTwoApple;
      console.log(basketOneApple, "ONE");
      console.log(basketTwoApple, "TWO");
      root.render(<BucketContainer />);
    }
  };
  return (
    <div className="container">
      <AppleCounter value={basketOneApple} label={`Basket 1`} />
      <CustomButton
        label={`Add (Basket 1)`}
        buttonName={"Basket One"}
        // onClickHandler={() => setTransferApple(transferApple - 1)}
        onClickHandler={handleLeftBasket}
        // isButtonDisable={transferApple === 0}
      />
      <CustomButton
        label={`Add (Basket 2)`}
        buttonName={"Basket Two"}
        // onClickHandler={() => setTransferApple(transferApple + 1)}
        onClickHandler={handleRightBasket}
        // isButtonDisable={totalApples === transferApple}
      />
      <AppleCounter value={basketTwoApple} label={`Basket 2`} />
    </div>
  );
};

export default BucketContainer;
