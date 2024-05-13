const EmployeeNameList = ({ data = [], dispathCurrentEmployee }) => {
  return (
    <div className="border w-1/5">
      <ol className="m-3 p-2 cursor-pointer">
        {data?.map((employee) => {
          return (
            <li
              key={employee.id}
              className="border-r-2 border-b-2 hover:text-white hover:bg-slate-400"
              onClick={() => dispathCurrentEmployee(employee.id)}
            >
              {employee.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default EmployeeNameList;
