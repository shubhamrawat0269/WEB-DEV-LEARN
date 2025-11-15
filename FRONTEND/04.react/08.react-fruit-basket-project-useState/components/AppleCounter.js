const AppleCounter = ({ value, label }) => {
  return (
    <section className="basket">
      <span>{value}</span>
      <p>{label}</p>
    </section>
  );
};

export default AppleCounter;
