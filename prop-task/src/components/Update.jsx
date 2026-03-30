import React from 'react'

const Update = ({UpdateClick}) => {
  return (
    

    <div>
      <button onClick={() => UpdateClick(false)}>Update Employee</button>
    </div>
   
  )
}

export default Update
