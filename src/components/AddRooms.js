import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import base_url from "../services/Api";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddRooms = () => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    availability: "",
    cleaningStatus: "",
    price: "",
    bedType: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
    axios
      .post(`${base_url}/room/`, formData)
      .then((response) => {
        console.log("vyftr6iyruk", response.data);
        console.log("room added successfully:", response.data);
        toast.success("Employee added successfully", {
          position: "bottom-center",
        });

        // Reset form after successful submission
        setFormData({
          roomNumber: "",
          availability: "",
          cleaningStatus: "",
          price: "",
          bedType: "",
        });
      })
      .catch((error) => {
        console.error("Error adding Room:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  return (
    <Container>
      <h1>Room Details Form</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="roomNumber">Room Number</Label>
          <Input
            type="text"
            name="roomNumber"
            id="roomNumber"
            value={formData.roomNumber}
            onChange={(e) => {
              setFormData({ ...formData, roomNumber: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="availability">Availability</Label>
          <Input
            type="select"
            name="availability"
            id="availability"
            value={formData.availability}
            onChange={(e) => {
              setFormData({ ...formData, availability: e.target.value });
            }}
          >
            <option value="">Select Availability</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="cleaningStatus">Cleaning Status</Label>
          <Input
            type="select"
            name="cleaningStatus"
            id="cleaningStatus"
            value={formData.cleaningStatus}
            onChange={(e) => {
              setFormData({ ...formData, cleaningStatus: e.target.value });
            }}
          >
            <option value="">Select Cleaning Status</option>
            <option value="clean">Clean</option>
            <option value="dirty">Dirty</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedType">Bed Type</Label>
          <Input
            type="select"
            name="bedType"
            id="bedType"
            value={formData.bedType}
            onChange={(e) => {
              setFormData({ ...formData, bedType: e.target.value });
            }}
          >
            <option value="">Select Bed Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
          </Input>
        </FormGroup>
        <Button type="submit" color="warning">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default AddRooms;
