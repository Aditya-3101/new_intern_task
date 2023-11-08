import React from "react";
import { CourseCard } from "./CourseCard";

export const MainContent = ({ info }) => {
  const { full_name, avatar, phone, email, enrolled_courses } = info[0];

  return (
    <div className="maincontent-container">
      <p className="maincontent-header">DashBoard</p>
      <div className="profile-section">
        <img src={avatar} className="user-photo" alt={full_name} />
        <div className="profile-info">
          <p className="user-name">{full_name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="user-courses">
        <p className="maincontent-header">Enrolled courses</p>
        <div>
          {enrolled_courses.map((para, index) => {
            return <CourseCard data={para} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
