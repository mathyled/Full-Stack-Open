import React from "react";

const Filter = ({handlerFilterInput,inputFilter} ) => {
  return (
    <>
      <p>
        filter shown with{" "}
        <input onChange={handlerFilterInput} value={inputFilter} />
      </p>
    </>
  );
};


export default Filter;
