import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import { useParams } from "react-router-dom";

const UpdateCustomer = () => {
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

  const { customerId } = useParams();

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = () => {
    axios
      .get(`${base_url}/customer/${customerId}`)
      .then((response) => {
        console.log("Customer details:", response.data);
        toast.success("Customer details have been loaded", {
          position: "bottom-center",
        });
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  const handleUpdate = () => {
    axios
      .put(`${base_url}/customer/${customerId}`, formData)
      .then((response) => {
        console.log("Customer updated successfully:", response.data);
        toast.success("Customer updated successfully", {
          position: "bottom-center",
        });
      })
      .catch((error) => {
        console.error("Error updating customer:", error);
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
      <h1>Update Customer Details</h1>
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
          <Label for="country">Country</Label>
          <Input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
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
        <FormGroup>
          <Label for="document">Select Document Type</Label>
          <Input
            type="select"
            name="document"
            id="document"
            value={formData.document}
            onChange={handleChange}
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
          />
        </FormGroup>
        <Button color="primary" type="submit" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary">Cancel</Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default UpdateCustomer;
