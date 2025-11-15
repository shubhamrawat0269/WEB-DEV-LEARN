const AppleCounter = ({ value, label }) => {
  return (
    <section className="basket">
      <span>{value}</span>
      <p>
        {label} {value === 10 ? "(FULL)" : value === 0 ? "(EMPTY)" : ""}
      </p>
    </section>
  );
};

export default AppleCounter;
