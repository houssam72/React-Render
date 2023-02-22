import React, { useCallback, useMemo, useState } from "react";
import { MemozidChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Houssam");

  const person = {
    fName: "Houssam",
    lName: "Wayne",
  };

  const handleClick = () => {};

  const memorizedMerson = useMemo(() => person, []);
  const memorizedHandleClick = useCallback(() => handleClick, []);
  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count-{count}</button>
      <button onClick={() => setName("CodeEvolution")}>Name-{name}</button>
      <MemozidChildFive
        name={name}
        person={memorizedMerson}
        handleClick={memorizedHandleClick}
      />
    </div>
  );
};
