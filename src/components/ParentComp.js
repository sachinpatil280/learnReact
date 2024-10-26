import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sachin",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sachin",
      });
    }, 2000);
  }
  render() {
    console.log("########### PARENT ###########");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
