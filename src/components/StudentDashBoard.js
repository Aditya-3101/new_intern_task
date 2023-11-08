import React from "react";
import { SideBar } from "./SideBar";
import { MainContent } from "./MainContent";
import { getStudentData } from "../api";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { CourseList } from "./Listings";

export function loader() {
  return getStudentData();
}

export const DashBoard = () => {
  const data = useLoaderData();
  const option = useSelector((state) => state.DefaultCondition);

  return (
    <div>
      <div className="dashBoard-container">
        <SideBar />
        {option === "dashboard" ? <MainContent info={data} /> : <CourseList />}
      </div>
    </div>
  );
};
