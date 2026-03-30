// import React from 'react'

// //rafce
// const AddEmployee = () => {
//     let [employee,setEmployee]= useState({empname:"", emprole:"",empsalary:""})
//   return (


//     const handleChange =(e)=>{
//         let [name,value]=e.target; //name=empname ,value="tejas"
//         setEmployee({...employee,[name]:value})

//     }

//     const handleSubmit = (e) =>{ //page bar bar refersh na ho
//         e.preventDefault();  //refresh na ho
//         console.log(employee)

//         setEmployee({name:"",role:"",salaey})
//     }

    
//     <div>
//         <h2>Add Employee</h2>


// <form onSubmit = {handleSubmit}>
//   <h3>enter emp name:<input type="text" name="empname" value={employee.empname}onChange={handleChange}/></h3>
//   <h3>enter emp role:<input type="text" name="emprole"value={employee.role} onChange={handleChange}</h3>
//     <h3>enter emp salary:<input type="text" name="empsalary" onChange={handleChange}</h3>

    
// </form>
        
      
//     </div>
//   )
// }

// export default AddEmployee




import React, { useState } from 'react'

// rafce
const AddEmployee = () => {

  // state to store employee data (object form)
  let [employee, setEmployee] = useState({
    empname: "",
    emprole: "",
    empsalary: ""
  })

  // handle input change (onChange event)
  const handleChange = (e) => {

    // destructuring name and value from input field
    // name = empname / emprole / empsalary
    // value = jo user type karega
    let { name, value } = e.target  

    // updating state dynamically using spread operator
    setEmployee({
      ...employee,
      [name]: value   // dynamic key update
    })
  }

  // handle form submit
  const handleSubmit = (e) => {

    // prevent page refresh
    e.preventDefault()

    // print employee data in console
    console.log(employee)

    // reset form after submit
    setEmployee({
      empname: "",
      emprole: "",
      empsalary: ""
    })
  }

  return (
    <div>
      <h2>Add Employee</h2>

      {/* form submit event */}
      <form onSubmit={handleSubmit}>

        <h3>
          Enter emp name:
          <input
            type="text"
            name="empname"   // key name
            value={employee.empname}   // controlled component
            onChange={handleChange}   // event handler
          />
        </h3>

        <h3>
          Enter emp role:
          <input
            type="text"
            name="emprole"
            value={employee.emprole}
            onChange={handleChange}
          />
        </h3>

        <h3>
          Enter emp salary:
          <input
            type="text"
            name="empsalary"
            value={employee.empsalary}
            onChange={handleChange}
          />
        </h3>

        {/* submit button */}
        <button type="submit">Add Employee</button>

      </form>
    </div>
  )
}

export default AddEmployee