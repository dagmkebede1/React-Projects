import React from "react";
import { NavLink } from "react-router-dom";
import { BsJournalBookmark, BsBookmarkCheck } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to="/patients"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              {" "}
              <BsJournalBookmark />
              <p>Patients</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Booking">
              <BsBookmarkCheck />
              <p>Booking</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Expense">
              <GiExpense />
              <p>Expense</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Setting">
              {" "}
              <AiOutlineSetting />
              <p>Setting</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
