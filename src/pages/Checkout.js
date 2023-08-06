import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import axios from "axios";
import base_url from "../services/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomData, setRoomData] = useState(null);

  const handleRoomNumberChange = (e) => {
    setRoomNumber(e.target.value);
  };

  const handleCheckout = () => {
    // Your checkout logic here (e.g., call an API to process the checkout)
    // ...

    // Reset the room number and room data after successful checkout
    setRoomNumber("");
    setRoomData(null);

    // Show a success message to the user
    toast.success("Room checked out successfully", {
      position: "bottom-center",
    });
  };

  const fetchRoomData = () => {
    axios
      .get(`${base_url}/room/rooms/${roomNumber}`)
      .then((response) => {
        console.log("Room details:", response.data);
        setRoomData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
        setRoomData(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRoomData();
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="roomNumber">Enter Room Number</Label>
          <Input
            type="text"
            name="roomNumber"
            id="roomNumber"
            value={roomNumber}
            onChange={handleRoomNumberChange}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Find Room
        </Button>
      </Form>

      {roomData && (
        <>
          <h2>Room Details</h2>
          <Table>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Availability</th>
                <th>Cleaning Status</th>
                <th>Price</th>
                <th>Bed Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{roomData.roomNumber}</td>
                <td>{roomData.availability}</td>
                <td>{roomData.cleaningStatus}</td>
                <td>{roomData.price}</td>
                <td>{roomData.bedType}</td>
              </tr>
            </tbody>
          </Table>
          <Button color="success" onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Checkout;
