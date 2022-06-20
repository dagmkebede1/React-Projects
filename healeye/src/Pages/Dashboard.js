import React from "react";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default Dashboard;
