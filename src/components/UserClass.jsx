import React, { useState } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://degaulturl.jpg",
      },
    };
    // console.log("Consturctor Called");
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/ashutoshsahu007");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log("Component did mount ");
  }

  componentDidUpdate() {
    // console.log("Component Did Update ");
  }

  componentWillUnmount() {
    // console.log("Component will Unmount ");
  }

  render() {
    // console.log("Render Called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="w-40" src={avatar_url} />
        <h2>Name :{name} </h2>
        <h3>Location :{location} </h3>
        <h4>Contact : @ashutoshsahu007 </h4>
      </div>
    );
  }
}
export default UserClass;
