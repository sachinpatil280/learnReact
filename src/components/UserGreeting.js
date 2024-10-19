import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Method 4
    return this.state.isLoggedIn && <div>Welcome Sachin</div>;

    // Method 3
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sachin</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Method 2
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Sachin</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // Method 1
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div> Welcome Sachin</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
