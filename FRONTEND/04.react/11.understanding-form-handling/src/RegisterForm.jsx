import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validationConfig = {
    name: [
      {required: true, message: 'Please enter title'},
      {minLength: 5, message: 'Title should be at least 5 characters long'}
    ],
    email: [{required: true, message: 'Please enter email'}],
    password: [{required: true, message: 'Please enter password'}]
  }

  function validateData(data) {
    const errorData = {};

    Object.entries(data).forEach(([key,value]) => {
      validationConfig[key].forEach((rule) => {
        if(rule.required && !value){
          errorData[key] = rule.message;
        }

        if(rule.minLength && value.length < 5){
          errorData[key] = rule.message;
        }
      })
    })

    // if (!data.name) {
    //   errorData["name"] = "name field is required";
    // }
    // if (!data.email) {
    //   errorData["email"] = "email field is required";
    // }
    // if (!data.password) {
    //   errorData["password"] = "password field is required";
    // }
    setErrors(errorData);
    return errorData;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));

    delete errors[name];
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    const errorMessages = validateData(formData);
    if(Object.keys(errorMessages).length === 0){
      setSubmitted(true)
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmitForm}>
        <div>
        <label htmlFor="name">Name</label>
        <input
          className="input-field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="enter name"
        />
        <p>{errors.name}</p>
        </div>

        <div>
          <label htmlFor="name">Email</label>
        <input
          className="input-field"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="enter email"
        />
        <p>{errors.email}</p>
        </div>

        <div>
          <label htmlFor="name">Password</label>
        <input
          className="input-field"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="enter password"
        />
        <p>{errors.password}</p>
        </div>

        <button className="submit-btn" type="submit">
          Register
        </button>
      </form>

      {isSubmitted && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
