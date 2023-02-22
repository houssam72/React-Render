import React,{useState} from 'react'
import { ChildOne } from './ChildOne'
import { ParentOne } from './ParentOne'

export const GrandParents = () => {

    const [newCount,setNewCount]=useState(0)
    console.log("GrandParent Render")
  return (
    <div>
        <button onClick={()=>setNewCount((prev)=>prev+1)}>
        GrandParents - Count :{newCount}
        </button>
        <ParentOne>
            <ChildOne/>
        </ParentOne>
        </div>
  )
}
