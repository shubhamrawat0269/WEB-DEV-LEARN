import { RxCross2 } from "react-icons/rx";
import { studentProgressList } from "../../utils";

const Status = ({ count, label }) => {
  return (
    <div className={`flex justify-center items-center gap-1 text-white`}>
      <span></span>
      <span className="font-bold">{count}</span>
      <span>{label}</span>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-zinc-800">
      <div className="p-2">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <RxCross2 size={20} color="#FFF" />
          </div>
          <h2 className="text-2xl text-white">
            CODE-A-THON FDT Online Test Week 1
          </h2>
        </div>

        <div className="md:flex md:items-center md:justify-between px-4">
          <div className="flex justify-center items-center gap-2 my-2">
            {studentProgressList.map((cur, id) => {
              return <Status label={cur.label} key={id} count={cur.count} />;
            })}
          </div>

          <div className="text-center text-blue-700 font-bold cursor-pointer">
            Show only incorrect attempts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
