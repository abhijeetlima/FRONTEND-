import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import { useParams } from "react-router-dom";

const UpdateEmployee = ({ match }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    job: "",
    salary: "",
    phone: "",
    aadharNo: "",
    email: "",
    password: "",
    roles: "",
  });

  const { employeeId } = useParams();

  useEffect(() => {
    fetchEmployeeData();
  }, );

  const fetchEmployeeData = () => {
    axios
      .get(`${base_url}/employee/${employeeId}`)
      .then((response) => {
        console.log("Employee details:", response.data);
        toast.success("Employee details have been loaded", {
          position: "bottom-center",
        });
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  const handleUpdate = () => {
    axios
      .put(`${base_url}/employee/${employeeId}`, formData)
      .then((response) => {
        console.log("Employee updated successfully:", response.data);
        toast.success("Employee updated successfully", {
          position: "bottom-center",
        });
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!formData) {
    // Render a loading state or return null if formData is not yet available
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h1>Update Employee Details</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input
            type="select"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="job">Job</Label>
          <Input
            type="text"
            name="job"
            id="job"
            value={formData.job}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="salary">Salary</Label>
          <Input
            type="number"
            name="salary"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="aadharNo">Aadhar</Label>
          <Input
            type="text"
            name="aadharNo"
            id="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="role">Roles</Label>
          <Input
            type="roles"
            name="roles"
            id="password"
            value={formData.roles}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="button" color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button type="button" color="secondary"></Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default UpdateEmployee;
