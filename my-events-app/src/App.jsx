
// import { useState } from 'react'
// import './App.css'


// function App() {

//   let [name, setName] = useState("")
//   let [password, setPassword] = useState("")
//   let [msg, setMsg] = useState("")

//   const handleUserName = (i) => {
//     console.log(i.target.name)
//     console.log(i.target.value)

//     setName(i.target.value)
//   }

//   const handlePassword = (i) => {
//     console.log(i.target.name)
//     console.log(i.target.value)

//     setPassword(i.target.value)
//   }

//   const handleLogin = () => {
//     console.log("login start")

//     if (name === "tejas" && password == "tka123") {
//       setMsg("Login Success")
//     } else {
//       setMsg("Login failed")
//     }

//     console.log("login end")
//   }   // ✅ FIX: function properly closed here

//   return (
//     <>
//       <center>
//         <h2>
//           Enter your name:
//           <input type="text" name="username" onChange={handleUserName} />
//         </h2>

//         <h2>
//           Enter your name:
//           <input type="text" name="password" onChange={handlePassword} />
//         </h2>

//         {/* handler
//         to accept input values we use onChange event.....
//         Input tag change kaise karenge jo hum usmein type karenge vahi change hai */}

//         <button type="button" onClick={handleLogin}>Login</button>

//         <h1>Hello from Events App.. {name}</h1>
//         <h2 id='msg'>{msg}</h2>

//         <AddEmployee/>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, itaque.
//         </p>
//       </center>
//     </>
//   )
// }

// export default App



import { useState } from 'react'
import './App.css'
import AddEmployee from './assets/AddEmployee'

// ✅ FIX: import component


function App() {

  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [msg, setMsg] = useState("")

  // handle username input
  const handleUserName = (i) => {
    console.log(i.target.name)
    console.log(i.target.value)

    setName(i.target.value)
  }

  // handle password input
  const handlePassword = (i) => {
    console.log(i.target.name)
    console.log(i.target.value)

    setPassword(i.target.value)
  }

  // handle login button
  const handleLogin = () => {
    console.log("login start")

    // check credentials
    if (name === "tejas" && password === "tka123") {
      setMsg("Login Success")
    } else {
      setMsg("Login failed")
    }

    console.log("login end")
  }

  return (
    <>
      <center>
        <h2>
          Enter your name:
          <input
            type="text"
            name="username"
            onChange={handleUserName}
          />
        </h2>

        <h2>
          Enter your password:
          <input
            type="password"   // ✅ better practice
            name="password"
            onChange={handlePassword}
          />
        </h2>

        {/* onChange → input value capture karne ke liye use hota hai */}

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <h1>Hello from Events App.. {name}</h1>
        <h2 id='msg'>{msg}</h2>

        {/* ✅ child component */}
     <AddEmployee/>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, itaque.
        </p>
      </center>
    </>
  )
}

export default App