const Input = ({ id, type, title, placeholder, error }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        className="form-input"
        placeholder={placeholder}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};

export default Input;
