import React, { useEffect , useState} from 'react'

const ShowEmployees = () => {

    let employees = [
     {id:1,name:"raj",salary:12345},
     {id:2,name:"neha",salary:12121},
     {id:3,name:"jay",salary:12341},
     {id:4,name:"tina",salary:124322},


    ]

   function loadEmployees(){
    console.log(employees);
   }

  //useEffect(loadEmployees,[])

  //second syntax of useeffect

  let [count,setCount]=useState(0)
  useEffect(()=>{
    loadEmployees();
    
    console.log("count==>"+count)
  },[count])

  return (
    <div>
     <center>
         <h2>Show Employees Component</h2>

         <button onClick={()=>setCount(count+1)}>Increase</button>

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
                //js ata to curly bracks jSx no curly brac
                employees.map((emp)=>(
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                    </tr>
                )
            )
            }
            
        </tbody>
      </table>

     </center>

    </div>
  )
}

export default ShowEmployees
