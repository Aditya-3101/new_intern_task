import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineBook } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { defaultCase, availCase } from "../actions";

export const SideBar = () => {
  const option = useSelector((state) => state.DefaultCondition);
  const dispatch = useDispatch();

  const changeOption = () => {
    if (option === "dashboard") {
      dispatch(availCase());
    }
    if (option === "courses") {
      dispatch(defaultCase());
    }
    // dispatch(availCase());
  };

  return (
    <div className="sidebar-container">
      <ul className="sideBar-contents">
        <li
          className={option === "dashboard" ? "active" : ""}
          onClick={changeOption}
        >
          <MdOutlineSpaceDashboard />
          DashBoard
        </li>
        <li
          className={option === "courses" ? "active" : ""}
          onClick={changeOption}
        >
          <AiOutlineBook /> Courses
        </li>
      </ul>
    </div>
  );
};
