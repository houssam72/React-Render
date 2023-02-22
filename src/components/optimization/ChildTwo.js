import React,{memo} from "react";

export const ChildTwo = () => {
  console.log("ChildTwo Render");
  return <div>ChildTwo components</div>;
};

export const MemozidChildTwo =memo(ChildTwo)
