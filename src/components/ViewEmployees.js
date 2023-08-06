import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import UpdateEmployee from "./UpdateEmployee";
import { Link } from "react-router-dom";

const ViewEmployees = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

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

  const handleUpdate = (id) => {
    setSelectedEmployeeId(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${base_url}/employee/${id}`)
      .then((response) => {
        console.log("Employee deleted successfully:", response.data);
        toast.success("Employee deleted successfully", {
          position: "bottom-center",
        });

        // After successful deletion, fetch the updated employee data
        fetchEmployeeData();
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
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
            <th>Age</th>
            <th>Gender</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Phone</th>
            <th>Aadhar</th>
            <th>Email</th>
            <th>Password</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.job}</td>
              <td>{employee.salary}</td>
              <td>{employee.phone}</td>
              <td>{employee.aadharNo}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>{employee.roles}</td>
              <td>
                {selectedEmployeeId === employee.id ? (
                  <Link to={`/admin/update-employee/${selectedEmployeeId}`}>
                    <Button color="primary">Update</Button>
                  </Link>
                ) : (
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(employee.id)}
                  >
                    Update
                  </Button>
                )}
                <Button
                  color="danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
};

export default ViewEmployees;
