import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { EmployeeContext } from "../../../contexts/EmployeeContexts";

const EmployeeForm = () => {
  const { showModal, setEmployeeData, setShowModal } =
    useContext(EmployeeContext);

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let empDetails = {
      id: uuidv4(),
      name: formData.get("fullname"),
      address: formData.get("address"),
      mobile: formData.get("mobile"),
      avatar: formData.get("avatar"),
      dob: formData.get("dob"),
    };

    // console.log(empDetails);

    setShowModal(false);
    setEmployeeData((preEmpDetails) => [...preEmpDetails, empDetails]);
  }

  return (
    <>
      {showModal && (
        <div className="form-ctrl flex flex-col gap-10">
          <h1>Employee Data Added Here </h1>
          <form className="flex flex-col gap-2" onSubmit={onSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="name"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="address"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="mobile"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="avatar"
              placeholder="input a url of Avatar"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="dob"
              placeholder="birth"
              autoComplete="off"
              required
            />

            <button type="submit" className="btn text-white">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EmployeeForm;
