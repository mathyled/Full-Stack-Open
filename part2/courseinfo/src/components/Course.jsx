import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = (props) => {
  return (
    <>
      {props.courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
