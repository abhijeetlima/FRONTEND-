import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import base_url from "../services/Api";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddEmployee = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
    axios
      .post(`${base_url}/employee/`, formData)
      .then((response) => {
        console.log("Employee added successfully:", response.data);
        toast.success("Employee added successfully", {
          position: "bottom-center",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          age: "",
          gender: "",
          job: "",
          salary: "",
          phone: "",
          aadhar: "",
          email: "",
          password: "",
          roles: "",
        });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  return (
    <Container>
      <h1>Employee Details Form</h1>
      <Form onSubmit={handleSubmit}>
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
            <option value="">Select Gender</option>
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
            type="tel"
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
          <Label for="roles">Roles</Label>
          <Input
            type="select"
            name="roles"
            id="roles"
            value={formData.roles}
            onChange={handleChange}
          >
            <option value="">Select Roles</option>
            <option value="ADMIN">ADMIN</option>
            <option value="RECEPTION">RECEPTION</option>
          </Input>
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
        <Button type="reset" color="warning">
          Clear
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default AddEmployee;
