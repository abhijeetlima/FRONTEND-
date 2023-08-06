import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import base_url from "../services/Api";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NewCustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    allocatedRoom: "",
    deposit: "",
    checkIn: "",
    document: "",
    documentNo: "",
    phone: "",
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
    // Get the current date and time
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    // Format the date and time as 'YYYY-MM-DD HH:mm'
    const checkIn = `${year}-${month}-${day} ${hours}:${minutes}`;
    setFormData((prevData) => ({
      ...prevData,
      checkIn: checkIn,
    }));

    // Prepare the data to be sent to the backend
    const customerData = {
      name: formData.name,
      gender: formData.gender,
      country: formData.country,
      allocatedRoom: formData.allocatedRoom,
      deposit: formData.deposit,
      checkIn: formData.checkIn,
      document: formData.document,
      documentNo: formData.documentNo,
      phone: formData.phone,
    };

    // Send the data to the backend
    axios
      .post(`${base_url}/customer/`, customerData)
      .then((response) => {
        console.log("Customer added successfully:", response.data);
        toast.success("Customer added successfully", {
          position: "bottom-center",
        });
        // Reset form after successful submission
        setFormData({
          name: "",
          gender: "",
          country: "",
          allocatedRoom: "",
          deposit: "",
          checkIn: "",
          document: "",
          documentNo: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error("Error adding customer:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  return (
    <Container>
      <h1>Customer Details Form</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="document">Select Document Type</Label>
          <Input
            type="select"
            name="document"
            id="document"
            value={formData.document}
            onChange={handleChange}
            required
          >
            <option value="">Select Document Type</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="voterCard">Voter Card</option>
            <option value="drivingLicense">Driving License</option>
            <option value="panCard">PAN Card</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="documentNo">Document Number</Label>
          <Input
            type="text"
            name="documentNo"
            id="documentNo"
            value={formData.documentNo}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="country">Country</Label>
          <Input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="allocatedRoom">Allocated Room Number</Label>
          <Input
            type="text"
            name="allocatedRoom"
            id="allocatedRoom"
            value={formData.allocatedRoom}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="deposit">Deposit</Label>
          <Input
            type="number"
            name="deposit"
            id="deposit"
            value={formData.deposit}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="checkIn">Check-in Time</Label>
          <Input
            type="text"
            name="checkIn"
            id="checkIn"
            value={formData.checkIn}
            readOnly
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default NewCustomerForm;
