import React, { useEffect, useState } from 'react'
import { showAllEmployees } from '../services';

const FindAllComponent = () => {


   let[emps,setEmps]=useState([])

   useEffect(()=>{
    loadEmployees();
   },[])

   const loadEmployees = ()=>{
    let eee = showAllEmployees();
    setEmps(eee)
   }



  return (
    <div>
      <h2>Show All Employees</h2>

       <center>
        <table border="1">

             <thead>
                 <tr>
                        <th>ID</th>
                         <th>NAME</th>
                         <th>SALARY</th>
                                
                 </tr>
            </thead>

            <tbody>
                    {
                     emps.map((e) => (
                        <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.salary}</td>
                                    </tr>
                                ))
                    }
            </tbody>
                </table>
            </center>
            



    </div>
  )
}

export default FindAllComponent
