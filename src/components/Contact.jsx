import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Contact = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline !! Please Check Your Internet Connection
      </h1>
    );
  }

  return (
    <div>
      <h1>Contact us on linked in </h1>
    </div>
  );
};

export default Contact;
