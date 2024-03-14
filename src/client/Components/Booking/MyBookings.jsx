import React from "react";
import { useContext } from "react";
import { formContext } from "../../App";
function MyBookings() {
  const { loggedInUser } = useContext(formContext);
  const userJSON = localStorage.getItem("decoded");
  const user = JSON.parse(userJSON);
  const userId = user.userId;
  
  return <div></div>;
}

export default MyBookings;
