import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const Join = () => {
  const [name, setName] = useState();

  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };
  return (
    <div>
      <div className="JoinPage">
        <div className="JoinContainer">
          <img src={logo} alt="logo" />
          <h1>C Chat</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            type="text"
            id="joinInput"
          />
          <Link
            onClick={(event) => (!name ? event.preventDefault() : null)}
            to="/chat"
          >
            <button onClick={sendUser} className="joinbtn">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
export { user };
