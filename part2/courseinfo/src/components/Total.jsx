import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return (
    <>
      <p>
        <b>Total of {total} exercixes</b>
      </p>
    </>
  );
};

export default Total;
