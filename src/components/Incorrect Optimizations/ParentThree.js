import React, { useState } from "react";
import { MemozidChildFour } from "./ChildFour";
import { MemozidChildThree } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Houssam");
  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count-{count}</button>
      <button onClick={() => setName("CodeEvolution")}>Name-{name}</button>
      <MemozidChildFour name={name}/>
      {/* <MemozidChildThree name={name}>
        <strong> Hello</strong>
      </MemozidChildThree> */}
    </div>
  );
};
