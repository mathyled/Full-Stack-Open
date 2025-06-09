import React from "react";
import Part from "./Part";

const Content = ({part}) => {
  console.log(part);
  
  return (
    <>
   <Part props={part}/>
    </>
  );
};

export default Content;
