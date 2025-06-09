import React from "react";
import Part from "./Part";

const Content = ({parts}) => {
  
  const [part1, part2, part3] = parts;

  // console.log(part1);
  

  return (
    <>
   <Part part={part1}/>
   <Part part={part2}/>
   <Part part={part3}/>
    </>
  );
};

export default Content;
