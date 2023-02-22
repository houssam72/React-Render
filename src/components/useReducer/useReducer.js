import React,{useReducer} from 'react'

   const UseReducer = () => {
    const initialiseState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment' :return state+1
        case 'decrement' :return state-1
        case 'reset' :return initialiseState
        default :return state
    }
}
    const [count,dispatch]=useReducer(reducer,initialiseState)
  
  console.log("UseReduecer Render")
  return (
<div>
<div>{count}</div>
<button onClick={() => dispatch("increment")}>Increment</button>
<button onClick={() => dispatch("decrement")}>Decrement</button>
<button onClick={() => dispatch('reset')}>Reset</button>
</div>
  )
}
export default UseReducer
