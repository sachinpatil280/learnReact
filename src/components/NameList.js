import React from "react";

function NameList() {
  const names = ["Sachin", "Snehal", "Veeha", "Veeha"];
  // const persons = [
  //   {
  //     id: 1,
  //     name: "Sachin",
  //     age: 34,
  //     skill: "QA",
  //   },
  //   {
  //     id: 2,
  //     name: "Snehal",
  //     age: 30,
  //     skill: "Dev",
  //   },
  //   {
  //     id: 3,
  //     name: "Veeha",
  //     age: 1,
  //     skill: "Cuteness",
  //   },
  // ];

  // const personList = persons.map((person) => (
  //   <Person key={person.name} person={person} />
  // ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
