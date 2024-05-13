import React, { useState } from "react";

const FormWithoutYup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
    gender: "",
    birth: "",
    interests: [],
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const data = [...formData.interests];
    if (checked) {
      data.push(name);
    } else {
      data = data.filter((cur) => cur !== name);
    }

    setFormData({
      ...formData,
      interests: data,
    });
  };

  return (
    <div className="bg-orange-600 w-full h-full grid place-content-center">
      <form onSubmit={onSubmit} className="bg-white p-[1.5rem] w-[25rem]">
        <h1 className="my-2 text-center">Registration Form</h1>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex justify-between items-center gap-2">
            <label>Full Name :</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Confirm password :</label>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Age :</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Gender :</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Birth :</label>
            <input
              type="date"
              name="birth"
              value={formData.birth}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label>Interests :</label>
            <div>
              <input
                type="checkbox"
                name="sports"
                value={formData.interests.includes("sports")}
                onChange={handleCheckboxChange}
              />
              <label>Sports</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="politics"
                value={formData.interests.includes("politics")}
                onChange={handleCheckboxChange}
              />
              <label>Politics</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="game"
                value={formData.interests.includes("game")}
                onChange={handleCheckboxChange}
              />
              <label>Game</label>
            </div>
          </div>
        </div>
        <div className="text-center pt-2">
          <button type="submit" className="bg-orange-600 text-white px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormWithoutYup;
