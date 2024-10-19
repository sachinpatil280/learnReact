import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Sachin",
      age: 34,
      skill: "QA",
    },
    {
      id: 2,
      name: "Snehal",
      age: 30,
      skill: "Dev",
    },
    {
      id: 3,
      name: "Veeha",
      age: 1,
      skill: "Cuteness",
    },
  ];

  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
