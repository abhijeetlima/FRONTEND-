import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";

const AllEmployeeInfo = () => {
  const [employeeData, setEmployeeData] = useState([]);
  // const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    axios
      .get(`${base_url}/employee/`)
      .then((response) => {
        console.log("Employee details:", response.data);
        toast.success("Employees have been loaded", {
          position: "bottom-center",
        });
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  return (
    <Container>
      <h1>Employee Details</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Gender</th>
            <th>Job</th>

            <th>Phone</th>

            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>

              <td>{employee.gender}</td>
              <td>{employee.job}</td>

              <td>{employee.phone}</td>

              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
};

export default AllEmployeeInfo;
