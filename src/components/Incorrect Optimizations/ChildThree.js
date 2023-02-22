import React, { memo } from "react";

export const ChildThree = ({ children, name }) => {
  console.log("ChildThree render");
  return (
    <div>
      {children} {name}
    </div>
  );
};

export const MemozidChildThree = memo(ChildThree);
