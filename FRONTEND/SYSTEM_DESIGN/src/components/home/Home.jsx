import withDimensions from "../../HOC/withDimensions";

const Home = (props) => {
  return (
    <div>
      Width of the screen is {props.width} x {props.height}
    </div>
  );
};

export default withDimensions(Home);
