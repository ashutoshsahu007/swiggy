import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>About Class Component </h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>UserName : {loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is Namaste React Web Series</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
