import axios from "axios";

// export const showAllEmployees = ()=> axios.get("http://localhost:8080/employees") //db.json
export const showAllEmployees = ()=> axios.get("http://localhost:9090/show-all-emps") // Java REST API


export const addEmployee = (emp) => axios.post("http://localhost:9090/save", emp) // Java REST API