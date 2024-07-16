import { RxCross1 } from "react-icons/rx";
const Modal = ({ dispatchModal, dispatchOffer }) => {
  return (
    <div className="bg-red-900 p-4 rounded-md flex flex-col justify-center gap-5">
      <div>
        <button onClick={() => dispatchModal(false)}>
          <RxCross1 size={20} />
        </button>
      </div>

      <div className="rounded-md flex flex-col justify-center items-center gap-5">
        <h2>Click the button below to accept offer</h2>
        <div>
          <button className="bg-orange-400 p-2" onClick={() => dispatchOffer()}>
            Accept Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
