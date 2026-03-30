// import React, { useEffect, useState } from 'react'

// const Addition = () => {
//   let [num1,setNum1]=useState(0)
//   let [num2,setNum2]=useState(0)

//   const handleNum1 = (e)=>{
//     setNum1 = (e)=>{
//         setNum1(e.target.value)
//     }
//   }
// const handleNum2 = (e)=>{
//     setNum1 = (e)=>{
//         setNum2(e.target.value)
//     }
//   }

 

//   return (
//     <div>

//     <h2> Num1 : <input type="number" onChange={handleNum1}/></h2>
//     <h2> Num1 : <input type="number" onChange={handleNum1}/></h2>
//       <h1>Sum = {num1 + num2}</h1>
//     </div>
//   )
// }

// export default Addition












// import React, { useState } from 'react'

// const Addition = () => {

//   let [num1, setNum1] = useState(0)
//   let [num2, setNum2] = useState(0)

//   // handle first input
//   const handleNum1 = (e) => {
//     setNum1(Number(e.target.value))   // convert string → number
//   }

//   // handle second input
//   const handleNum2 = (e) => {
//     setNum2(Number(e.target.value))
//   }



//   return (
//     <div>

//       <h2>
//         Num1 :
//         <input type="number" onChange={handleNum1} />
//       </h2>

//       <h2>
//         Num2 :
//         <input type="number" onChange={handleNum2} />
//       </h2>

//       <h1>Sum = {num1 + num2}</h1>

//     </div>
//   )
// }

// export default Addition







import React, { useState } from 'react'

const Addition = ({add1,add2}) => {

  

  return (
    <div>

      <h1>Sum = {add1 + add2}</h1>

    </div>
  )
}

export default Addition

