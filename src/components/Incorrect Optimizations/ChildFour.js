import React, { memo } from "react";

export const ChildFour = ({  name }) => {
  console.log("ChildFour render");
  const date=new Date()
  return (
    <div>
      Hello {name}. it is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  );
};

export const MemozidChildFour = memo(ChildFour);