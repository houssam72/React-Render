import React, { memo } from 'react'

export const ChildFive = ({name,person}) => {
    console.log("ChildFive render")
  return (
    <div>
        Hello {name} {person.fName} {person.lName}
    </div>
  )
}
export const MemozidChildFive = memo(ChildFive);
