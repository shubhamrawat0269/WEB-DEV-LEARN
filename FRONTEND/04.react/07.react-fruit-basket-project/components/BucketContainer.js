import { useState } from "react";
import AppleCounter from "./AppleCounter";
import CustomButton from "./CustomButton";

const BucketContainer = () => {
  const totalApples = 10;
  const [transferApple, setTransferApple] = useState(0);
  return (
    <div className="container">
      <AppleCounter
        value={totalApples - transferApple}
        label={`Basket 1`}
      />
      <CustomButton
        label={`Add (Basket 1)`}
        buttonName={"Basket One"}
        onClickHandler={() => setTransferApple(transferApple - 1)}
        isButtonDisable={transferApple === 0}
      />
      <CustomButton
        label={`Add (Basket 2)`}
        buttonName={"Basket Two"}
        onClickHandler={() => setTransferApple(transferApple + 1)}
        isButtonDisable={totalApples === transferApple}
      />
      <AppleCounter
        value={transferApple}
        label={`Basket 2`}
      />
    </div>
  );
};

export default BucketContainer;
