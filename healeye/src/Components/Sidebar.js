import React from "react";
import Logo from "../UI/Logo";
import Navigation from "../UI/Navigation";
import User from "../UI/User";
import Footer from "../UI/Footer";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Logo />

      <Navigation />
      <User />
      <Footer />
    </section>
  );
};

export default Sidebar;
