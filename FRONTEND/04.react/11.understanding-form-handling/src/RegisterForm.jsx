import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    console.log(formData)
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="enter name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="enter email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="enter password"
        />

        <button type="register">Register</button>
      </form>

      {isSubmitted && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
