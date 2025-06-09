import React from "react";

const Total = ({ parts }) => {
  // console.log(parts);
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <>
      <p>Numbers of exercixes {total}</p>
    </>
  );
};

export default Total;
