import React, { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";

export const CourseList = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [cpyData, setCpyData] = useState([]);

  function changeHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setData(cpyData);
    }
  }, [search]);

  const fetchData = async () => {
    // const controller = new AbortController();
    fetch(`https://serve-ix6g.onrender.com/courses`)
      .then((res) => res.json())
      .then((Response) => {
        setCpyData(Response);
        setData(Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function submitQuery(e) {
    e.preventDefault();
    const filteredSearch =
      String(search).charAt(0).toUpperCase() +
      String(search).slice(1).toLowerCase();
    const result = cpyData.filter((singleEntry) =>
      singleEntry.name.includes(filteredSearch)
    );
    if (result.length !== 0) {
      setData(result);
    } else {
      setData(cpyData);
    }
  }

  return (
    <div className="courses-container">
      <div className="course-lists">
        <form className="search-container" onSubmit={submitQuery}>
          <p>Search Courses</p>
          <input
            type="text"
            value={search}
            onChange={changeHandler}
            placeholder="Search your course"
          />
        </form>

        <div className="course-card-container">
          {data.map((par, index) => {
            return <CourseCard data={par} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
