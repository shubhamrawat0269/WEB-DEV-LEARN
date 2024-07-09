import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const defaultValues = {
    firstName: {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter First Name",
      value: "",
      isError: false,
      errorMsg: "First Name Field Cannot be Empty",
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter Last Name",
      value: "",
      isError: false,
      errorMsg: "Last Name Field Cannot be Empty",
    },
    email: {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Email",
      value: "",
      isError: false,
      errorMsg: "Email Field Cannot be Empty",
    },
    password: {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      value: "",
      isError: false,
      errorMsg: "Password Field Cannot be Empty",
    },
  };

  const [formData, setFormData] = useState(defaultValues);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    // console.log({ id, value });
    let form_data = { ...formData };
    form_data[id].value = value;

    setFormData(form_data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let form_data = { ...formData };
    Object.keys(form_data).map((cur) => {
      // console.log(formData[cur]);
      const { value } = form_data[cur];
      if (value.length <= 0) {
        form_data[cur]["isError"] = true;
      }
    });

    // console.log(form_data);
    setFormData(form_data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {Object.keys(formData).map((curr) => {
          const { id, label, type, placeholder, value, isError, errorMsg } =
            formData[curr];
          return (
            <div key={id}>
              <label htmlFor={label}>{label}</label>
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
              />
              {isError && <p className="text-red-500">{errorMsg}</p>}
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
