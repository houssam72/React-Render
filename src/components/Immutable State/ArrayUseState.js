import React ,{useState} from 'react'

const initState=['Bruce','Wayne']

export const ArrayUseState = () => {
    const [persons,setPersons]=useState(initState)

    const handleClick=()=>{
        let prs=[...persons]
        prs.push("Clark")
        prs.push("Test")
        setPersons(prs)
    }

    console.log("ArrayUseStateRender")
  return (
    <div>
          <button onClick={handleClick} >Click</button>
          {
            persons.map( (person,i)=>(
                <div key={i}>{person}</div>
            ))
          }

    </div>
  )
}
