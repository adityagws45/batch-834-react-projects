import React, { useState } from "react";
import { showAllEmployees } from "../services/services";

const ShowAll = () => {

  const [employees, setEmployees] = useState([]);

  
  const loadEmployees = () => {
    showAllEmployees()
      .then((res) => {
        console.log(res.data);   
        setEmployees(res.data);  
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <h2>Show All Employees</h2>

      <button onClick={loadEmployees}>Show All</button>

      <br /><br />

      <table border="1" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {
            employees.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.role}</td>
                  <td>{emp.salary}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

    </div>
  );
};

export default ShowAll;