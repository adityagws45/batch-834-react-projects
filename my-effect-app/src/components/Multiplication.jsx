// import React, { useState } from 'react'

// const Multiplication = () => {

//   let [num1, setNum1] = useState(0)
//   let [num2, setNum2] = useState(0)

//   // handle first input
//   const handleNum1 = (e) => {
//     setNum1(Number(e.target.value))
//   }

//   // handle second input
//   const handleNum2 = (e) => {
//     setNum2(Number(e.target.value))
//   }

//   return (
//     <div>

      

//       <h1>Multiplication = {num1 * num2}</h1>

//     </div>
//   )
// }

// export default Multiplication














// import React, { useState } from 'react'

// const Multiplication = (multi1,multi2) => {

//   return (
//     <div>

      

//       <h1>Multiplication = {multi1 * multi2}</h1>

//     </div>
//   )
// }

// export default Multiplication


import React, { useState } from 'react'

const Multiplication = ({multi1,multi2}) => {

  return (
    <div>

      

      <h1>Multiplication = {multi1 * multi2}</h1>

    </div>
  )
}

export default Multiplication