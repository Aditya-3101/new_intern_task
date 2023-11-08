import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CourseCard = ({ data }) => {
  const {
    id,
    name,
    thumbnail,
    instructor,
    progress,
    due,
    description,
    duration,
  } = data;

  const [status, setStatus] = useState(progress);

  return (
    <div className="course-info">
      <img src={thumbnail} alt={name} className="course-thumbnail" />
      <Link className="course-min-detail" to={`/courses/detail/${id}`}>
        <p className="course-name">
          <span className="course-title">{name}</span>
          <span className="course-author">{instructor}</span>
        </p>
        {due ? <p className="course-due">Due - {due}</p> : null}
        {progress ? (
          <p className="course-progress-detail">
            <progress
              value={status === 100 ? status : progress}
              max={100}
              className="course-progress"
            ></progress>
            {status === 100 ? status : progress}% course completed
          </p>
        ) : null}
        {due === undefined ? (
          description ? (
            <p className="course-description">{description}</p>
          ) : null
        ) : null}
        {due === undefined ? (
          duration ? (
            <p className="course-duration">{duration}</p>
          ) : null
        ) : null}
      </Link>
      {due ? (
        <button
          className="course-checkbox-mark"
          onClick={() => {
            setStatus(100);
          }}
        >
          Mark as completed
        </button>
      ) : null}
    </div>
  );
};
