import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import { useParams,  } from "react-router-dom";

const UpdateRoom = () => {
  const { roomId } = useParams();
 

  const [formData, setFormData] = useState({
    roomNumber: "",
    availability: "",
    cleaningStatus: "",
    price: "",
    bedType: "",
  });

  useEffect(() => {
    fetchRoomData();
  }, []);

  const fetchRoomData = () => {
    axios
    .get(`${base_url}/room/rooms/${roomId}`)
      .then((response) => {
        console.log("Room details:", response.data);
        toast.success("Room details have been loaded", {
          position: "bottom-center",
        });
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  const handleUpdate = () => {
    axios
      .put(`${base_url}/room/${roomId}`, formData)
      .then((response) => {
        console.log("Room updated successfully:", response.data);
        toast.success("Room updated successfully", {
          position: "bottom-center",
        });
        // Redirect to view rooms page after successful update
        // history.push("/admin/view-rooms");
      })
      .catch((error) => {
        console.error("Error updating room:", error);
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
      <h1>Update Room Details</h1>
      <Form>
        <FormGroup>
          <Label for="roomNumber">Room Number</Label>
          <Input
            type="text"
            name="roomNumber"
            id="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="availability">Availability</Label>
          <Input
            type="select"
            name="availability"
            id="availability"
            value={formData.availability}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedType">Bed Type</Label>
          <Input
            type="select"
            name="bedType"
            id="bedType"
            value={formData.bedType}
            onChange={handleChange}
          >
            <option value="">Select Bed Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
          </Input>
        </FormGroup>
        <Button type="button" color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default UpdateRoom;
