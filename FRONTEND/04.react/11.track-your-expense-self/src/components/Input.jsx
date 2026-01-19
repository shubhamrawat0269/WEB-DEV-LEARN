const Input = ({ id, type, title, value, onChange, placeholder, error }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="form-input"
        placeholder={placeholder}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};

export default Input;
