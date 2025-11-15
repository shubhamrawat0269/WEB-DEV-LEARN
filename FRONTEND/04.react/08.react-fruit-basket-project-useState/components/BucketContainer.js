import { useState } from "react";
import AppleCounter from "./AppleCounter";
import CustomButton from "./CustomButton";

const BucketContainer = () => {
  const totalApple = 10;
  const [basketOneApple, setBasketOneApple] = useState(10);
  const [basketTwoApple, setBasketTwoApple] = useState(0);

  const handleLeftBasket = () => {
    if (basketOneApple < 10) {
      setBasketOneApple((prev) => prev + 1);
      setBasketTwoApple((prev) => prev - 1);
    }
  };
  const handleRightBasket = () => {
    if (basketTwoApple < 10) {
      setBasketOneApple((prev) => prev - 1);
      setBasketTwoApple((prev) => prev + 1);
    }
  };
  return (
    <div className="container">
      <AppleCounter value={basketOneApple} label={`Basket 1`} />
      <CustomButton
        // label={`Add (Basket 1)`}
        buttonName={"Basket One"}
        onClickHandler={handleLeftBasket}
        isButtonDisable={basketOneApple === totalApple}
      >Add (Basket 1)</CustomButton>
      <CustomButton
        // label={`Add (Basket 2)`}
        buttonName={"Basket Two"}
        onClickHandler={handleRightBasket}
        isButtonDisable={basketTwoApple === totalApple}
      >Add (Basket 2)</CustomButton>
      <AppleCounter value={basketTwoApple} label={`Basket 2`} />
    </div>
  );
};

export default BucketContainer;
