const GreetWithName = ({ data }) => {
  const { id, fullname } = data;
  return <h1 id={id}>Hello {fullname}</h1>;
};

export default GreetWithName;
