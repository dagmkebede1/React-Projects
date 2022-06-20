import React from "react";
import { Link } from "react-router-dom";
import user from "./user.jpg";

const User = () => {
  return (
    <div>
      <Link className="user" to="/me">
        <img src={user} alt="user" />
        <div>
          <h3>Alazar Tegene</h3>
          <p>Admin</p>
        </div>
      </Link>
      <Link to="/logout" className="logout">
        <p>Sign Out</p>
      </Link>
    </div>
  );
};

export default User;
