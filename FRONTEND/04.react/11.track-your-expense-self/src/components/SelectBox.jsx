const SelectBox = ({ id, categories, title, error }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{title}</label>
      <select id={id} className="form-select">
        <option value="" disabled hidden>
          Select Category
        </option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <p className="error-message">{error}</p>
    </div>
  );
};

export default SelectBox;
