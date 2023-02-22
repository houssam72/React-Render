import React ,{useState} from 'react'

const initState={
    fName:'Houssam',
    lName:"Mrabte"
}
export const ObjectUseState = () => {
    const [person,setPerson]=useState(initState)

    const changeName=()=>{
        let prs={...person}
        prs.fName='Abir'
        prs.lName="Lmrabte"
        setPerson(prs)
    }

    console.log("ObjectUseState Render")
  return (
    <div>
        <button onClick={()=>changeName()}>{person.fName}  {person.lName}</button>
    </div>
  )
}
