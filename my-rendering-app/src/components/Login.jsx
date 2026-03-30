// import React from 'react'
// import  { useState } from 'react'  

// const Login = () => {

//     let [show,setShow]=useState(false)

//  const handleShow =()=>{

//    setShow(!show)

//     console.log("Show function ")
//  }





//   return (
//     <div>

//       <h2>Enter Login Details </h2>
//       <h3>Enter username:<input type="text"/></h3>
//       <h3>Enter password:<input type={show ? "text" :"password"}/><button type='button' onClick={handleShow}>{show ? "hidepassword":"show password"}</button></h3>
   
//     <button type='button'>Login</button>

//     </div>
//   )
// }

// export default Login




import React, { useState } from 'react'


const Login = () => {

  // single state object to store all input values
  let [user, setUser] = useState({ name: "", email: "", password: "" })

  // state to store login message
  let [msg, setMsg] = useState("")

  // state to toggle show/hide password
  let [show, setShow] = useState(false)


  // one common function to handle all input changes
  const handleChange = (e) => {
    let { name, value } = e.target   // get input name and value
    setUser({ ...user, [name]: value })   // update specific field using dynamic key
  }


  // function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()   // prevent page refresh

    // validation check
    if (user.name === "tejas" && user.email === "tejas@tka.com" && user.password === "tka123")
      setMsg("Login Success")   // if matched
    else
      setMsg("Login Failed")    // if not matched
  }

  // toggle password visibility
  const handleShow = () => setShow(!show)
  return (
    <div>

      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />

        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />

        <input type={show ? "text" : "password"} name="password" value={user.password} onChange={handleChange} placeholder="Password" />

        <button type="button" onClick={handleShow}>
          {show ? "Hide" : "Show"}
        </button>

        <button type="submit">Login</button>

      </form>

      <h2>{msg}</h2>

    </div>
  )
}


export default Login