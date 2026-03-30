import axios from "axios";

export const showAllEmployees = () => {
  return axios.get("http://localhost:8080/employees");
};