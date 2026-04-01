// import React, { useState } from 'react'
// import { addEmployee } from '../services';

// const AddEmployee = ({setRefresh}) => {


//    let [form,setForm]=useState({
//     name:"",
//     role:"",
//     salary:""
//    })
//    const handleChange=(e)=>{
//      let [name,value]=[e.target.name,e.target.value];
//      setForm({...form,[name]:value})
//    }

//    const handleSubmit=(e)=>{
//     e.preventDefault();
   
//     addEmployee(form).then((res)=>{
//         console.log("employee added successfully", res)

//         setForm({
//             name:"",
//             role:"",
//             salary:""
//            })
        
//         setRefresh(true)



        



//     }).catch((err)=>{
//         console.log("error while adding employee", err)
//     })
//    }


//   return (
//     <div>
//        <h2>Add Employee Form</h2>
// <form onSubmit={{handleSubmit}}>
//     enter name: <input type="text" name='name' onChange={handleChange}/><br/><br/>
//     enter role: <input type="text" name='role' onChange={handleChange}/><br/><br/>
//     enter salary: <input type="text" name='salary' onChange={handleChange}/><br/><br/>
//     <button type='submit'>Add Employee</button>
// </form>

//     </div>
//   )
// }

// export default AddEmployee









import React, { useState } from 'react'
import { addEmployee } from '../services';

const AddEmployee = ({ setRefresh }) => {

  const [form, setForm] = useState({
    name: "",
    role: "",
    salary: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(form)
      .then((res) => {
        console.log("employee added successfully", res);

        setForm({
          name: "",
          role: "",
          salary: ""
        });

        setRefresh(prev => !prev);   // ✅ FIXED
      })
      .catch((err) => {
        console.log("error while adding employee", err);
      });
  }

  return (
    <div>
      <h2>Add Employee Form</h2>

      <form onSubmit={handleSubmit}>
        Enter name:
        <input type="text" name="name" value={form.name} onChange={handleChange} /><br /><br />

        Enter role:
        <input type="text" name="role" value={form.role} onChange={handleChange} /><br /><br />

        Enter salary:
        <input type="text" name="salary" value={form.salary} onChange={handleChange} /><br /><br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  )
}

export default AddEmployee