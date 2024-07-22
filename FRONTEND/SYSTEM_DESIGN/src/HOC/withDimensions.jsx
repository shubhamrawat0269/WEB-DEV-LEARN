import { useState } from "react";

const withDimensions = (OriginalComponent) => {
  return (props) => {
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(300);

    return <OriginalComponent width={width} height={height} {...props} />;
  };
};

export default withDimensions;
