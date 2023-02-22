import "./App.css";
import { ContextParent } from "./components/Context.js/ContextParent";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ParentFour } from "./components/Incorrect Optimizations/ParentFour";
import { ParentThree } from "./components/Incorrect Optimizations/ParentThree";
import { ChildOne } from "./components/optimization/ChildOne";
import { GrandParents } from "./components/optimization/GrandParents";
import { ParentOne } from "./components/optimization/ParentOne";
import { ParentTwo } from "./components/optimization/ParentTwo";
import { Parent } from "./components/Parent Child/Parent";
import UseReducer from "./components/useReducer/useReducer";
import { UseState } from "./components/useState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState/> */}
      {/* <Parent/> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParents/> */}
      {/* <ParentTwo/> */}
      {/* <ParentThree/> */}
      {/* <ParentFour/> */}
      <ContextParent/>
    </div>
  );
}

export default App;
