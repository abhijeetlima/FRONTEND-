import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";

const ManagerInfo = () => {
  const [managerData, setManagerData] = useState([]);

  useEffect(() => {
    fetchManagerData();
  }, []);

  const fetchManagerData = () => {
    axios
      .get(`${base_url}/employee/`)
      .then((response) => {
        console.log("Employee details:", response.data);
        toast.success("Employees have been loaded", {
          position: "bottom-center",
        });
        // Filter out the managers from the employee data
        const managers = response.data.filter(
          (employee) => employee.job === "Manager"
        );
        setManagerData(managers);
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
      <h1>Manager Info</h1>
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
          {managerData.map((manager) => (
            <tr key={manager.id}>
              <td>{manager.name}</td>

              <td>{manager.gender}</td>
              <td>{manager.job}</td>

              <td>{manager.phone}</td>

              <td>{manager.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
};

export default ManagerInfo;
