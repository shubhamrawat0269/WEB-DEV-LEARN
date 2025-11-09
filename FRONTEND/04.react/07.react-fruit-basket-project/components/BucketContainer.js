import AppleCounter from "./AppleCounter";
import CustomButton from "./CustomButton";

const BucketContainer = () => {
  return (
    <div className="container">
      <AppleCounter value={10} label={`Basket 1`} />
      <CustomButton label={`Add (Basket 1)`} />
      <CustomButton label={`Add (Basket 2)`} />
      <AppleCounter value={0} label={`Basket 2`} />
    </div>
  );
};

export default BucketContainer;
