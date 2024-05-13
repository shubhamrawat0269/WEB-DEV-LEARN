import React, { useEffect, useState } from "react";
import Pill from "./Pill";

const MultiInputSearch = () => {
  const [inputText, setInputText] = useState("");
  const [inputTextList, setInputTextList] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  /*      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     */
  //   const handleInputSubmit = (e) => {
  //     // console.log(e.keyCode);
  //     if (e.keyCode == 13) {
  //       setInputTextList((pre) => [...pre, inputText]);
  //       setInputText("");
  //     }
  //   };

  //   console.log(inputTextList);
  /*      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     */

  // https://dummyjson.com/users/search?q=sh

  // for ref.   {
  //     "id": 1,
  //     "firstName": "Terry",
  //     "lastName": "Medhurst",
  //     "maidenName": "Smitham",
  //     "age": 50,
  // }

  const fetchUsers = async () => {
    if (inputText.trim() === "") {
      setInputTextList([]);
      return;
    }

    try {
      const res = await fetch(
        `https://dummyjson.com/users/search?q=${inputText}`
      );
      const resInJSON = await res.json();
      //   console.log(resInJSON);
      setInputTextList(resInJSON.users);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSelectedData = (id) => {
    // console.log(id);
    let data = [...inputTextList];
    let filterData = data.filter((cur) => cur.email === id);
    // console.log(filterData);
    if (filterData.length > 0) {
      const { firstName } = filterData[0];
      setSelectedData((pre) => [...pre, firstName]);
      setInputText("");
      setInputTextList([]);
    }
  };

  useEffect(() => {
    if (inputText.length > 0) {
      fetchUsers();
    }
  }, [inputText]);

  return (
    <div className="bg-yellow-500 h-[93.5vh] grid place-content-center">
      <div className="flex w-[35rem] h-[2.5rem] border-2 text-1xl">
        <div className="flex items-center gap-3 bg-white">
          {selectedData.map((cur) => {
            return <Pill title={cur} />;
          })}
        </div>
        <input
          type="text"
          id="search-box"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          //   onKeyDown={(e) => handleInputSubmit(e)}
          className="w-full pl-2 outline-none"
          placeholder="Search here ...."
          autoComplete="off"
        />
      </div>
      <div className="bg-orange-900 max-h-[25rem] overflow-auto">
        {inputTextList.map((cur) => {
          return (
            <div
              key={cur.email}
              onClick={() => handleSelectedData(cur.email)}
              className="p-2 text-white hover:bg-orange-800 hover:cursor-pointer"
            >
              {cur.firstName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiInputSearch;
