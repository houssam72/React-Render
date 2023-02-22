// I decided that insted of creating three separate files 
//It is simpler to have all three children components in the same file 

import { useContext } from "react"
import { CountContext } from "./ContextParent"

export const ChildA=()=>{
       console.log("Child A Render")
    return(
        <>
          <div>Child A</div>
          <ChildB/>
        </>
    )
}

export const ChildB=()=>{
    console.log("Child B Render")
 return(
     <>
       <div>Child B</div>
       <ChildC/>
     </>
 )
}

export const ChildC=()=>{
    const count=useContext(CountContext)
    console.log("Child C Render")
 return(
     <>
       <div>Child C  Count = {count}</div>
     </>
 )
}