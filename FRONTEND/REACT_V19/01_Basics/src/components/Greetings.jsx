import React from "react";
import GreetWithName from "./GreetWithName";

const data = [
  { id: 1, fullname: "Kamla Rawat" },
  { id: 2, fullname: "Sonal Rawat" },
  { id: 3, fullname: "Aditi Rawat" },
  { id: 4, fullname: "Shubham Rawat" },
  { id: 5, fullname: "Bharat Singh Rawat" },
];

const Greetings = () => {
  // return [
  //   <GreetWithName
  //     id="1"
  //     name="Sonal Rawat"
  //   />,
  //   <GreetWithName
  //     id="3"
  //     name="Shubham Rawat"
  //   />,
  //   <GreetWithName
  //     id="2"
  //     name="Aditi Rawat"
  //   />,
  // ];
  return (
    // <React.Fragment>
    <>
      {data.map((member) => {
        return (
          <GreetWithName
            key={member.id}
            name={member.fullname}
          />
        );
      })}
    </>
    // </React.Fragment>
  );
};

export default Greetings;
