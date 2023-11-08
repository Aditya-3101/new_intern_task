import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";

export const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(`http://localhost:4000/courses/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="course-detail-page">
        <img src={data.thumbnail} className="course-thumb" alt={data.name} />
        <div className="course-detail-section">
          <div className="course-detail-header">
            <p className="course-header-name">{data.name}</p>
            <p className="course-header-author">
              <AiOutlineUser className="user-icon" />
              <span>{data.instructor}</span>
            </p>
            <p className="course-header-description">{data.description}</p>
          </div>
          <div>
            <div className="course-detail-extra">
              <p>
                Enrollment -{" "}
                <span className="course-positive-opening">
                  {data.enrollmentStatus}
                </span>
              </p>
              <p>
                Course duration - <span>{data.duration}</span>
              </p>
              <p>
                Course schedule - <span>{data.schedule}</span>
              </p>
              <p>
                Course Mode/Location - <span>{data.location}</span>
              </p>
              <p>
                Course prerequisites -{" "}
                {data.prerequisites?.map((par) => {
                  return <span key={par}>{par}, </span>;
                })}
              </p>
            </div>
            <div className="course-detail-syllabus">
              <p className="syllabus-header">Syllabus</p>
              {data.syllabus?.map((par, index) => {
                return (
                  <details key={index} className="course-syllabus-week">
                    <summary>
                      <span>
                        week {par.week} - {par.topic}
                      </span>
                    </summary>
                    <p className="course-syllabus-content">{par.content}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <BsChevronLeft className="prev-icon" onClick={() => navigate("/")} />
    </div>
  );
};
