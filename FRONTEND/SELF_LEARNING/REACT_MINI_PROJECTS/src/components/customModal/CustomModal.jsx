import { useState } from "react";
import Modal from "./Modal";

const CustomModal = () => {
  const [show, setShow] = useState(false);
  const [isAcceptOffer, setAcceptOffer] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleAcceptOffer = () => {
    setShow(false);
    setAcceptOffer(true);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    // console.log("inside handleCLick");
    setShow(false);
  };

  return (
    <div className="relative w-full min-h-screen grid place-content-center">
      {isAcceptOffer ? (
        <div className="bg-red-500 p-2 text-white text-4xl">Offer Accepted</div>
      ) : (
        <div className="bg-red-500 p-2 text-white">
          <button onClick={handleOpenModal}>Open Modal</button>
        </div>
      )}

      {show && (
        <div
          className="absolute bg-blue-gray-100 grid place-content-center w-[100vw] h-[100vh]"
          onClick={handleClick}
        >
          <Modal dispatchModal={setShow} dispatchOffer={handleAcceptOffer} />
        </div>
      )}
    </div>
  );
};

export default CustomModal;
