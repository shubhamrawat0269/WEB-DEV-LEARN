import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../../contexts/EmployeeContexts";

const EmployeeForm = () => {
  const { showModal, setShowModal } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    dateofbirth: "",
    url: "",
  });

  const onhandleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className="absolute bg-gray-600 w-screen h-screen top-0 left-0 grid place-content-center">
          <div className="bg-white p-[2rem]">
            <form
              onSubmit={onSubmit}
              className="flex justify-between gap-3 items-center flex-col"
            >
              <div className="flex justify-between items-center">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onhandleChange}
                  className="border-2 border-gray-600 py-1 px-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={onhandleChange}
                  className="border-2 border-gray-600 py-1 px-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onhandleChange}
                  className="border-2 border-gray-600 py-1 px-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="mobile">Phone</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={onhandleChange}
                  className="border-2 border-gray-600 py-1 px-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="date">DOB</label>
                <input
                  type="date"
                  name="dateofbirth"
                  value={formData.dateofbirth}
                  onChange={onhandleChange}
                  className="border-2 border-gray-600 py-1 px-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="url">Profile URL</label>
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={onhandleChange}
                  className="border-2 border-gray-600 py-1 px-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-blue-400 p-2 text-white font-bold">
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeForm;
