import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked using Function component");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
