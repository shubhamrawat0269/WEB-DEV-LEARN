import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validateData(data) {
    const errorData = {};
    if (!data.name) {
      errorData["name"] = "name field is required";
    }
    if (!data.email) {
      errorData["email"] = "email field is required";
    }
    if (!data.password) {
      errorData["password"] = "password field is required";
    }

    return errorData;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    const errorMessages = validateData(formData);
    console.log(errorMessages);
    Object.keys(errorMessages).length === 0 ? setSubmitted(true) : alert('Some Field missing in form')
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
