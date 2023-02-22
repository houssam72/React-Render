import React, { useState } from "react";
import { MemozidChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Houssam");
  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count-{count}</button>
      <button onClick={() => setName("CodeEvolution")}>Name-{name}</button>
      <MemozidChildTwo name={name}/>
    </div>
  );
};
