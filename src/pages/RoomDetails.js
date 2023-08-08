import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";

const RoomDetails = () => {
  const [roomData, setRoomData] = useState([]);
  // const [selectedRoomId, setSelectedRoomId] = useState(null);

  useEffect(() => {
    fetchRoomData();
  }, []);

  const fetchRoomData = () => {
    axios
      .get(`${base_url}/room/`)
      .then((response) => {
        console.log("Room details:", response.data);
        toast.success("Rooms have been loaded", {
          position: "bottom-center",
        });
        setRoomData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  return (
    <Container>
      <h1>Room Details</h1>
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
          {roomData.map((room) => (
            <tr key={room.roomId}>
              <td>{room.roomNumber}</td>
              <td>{room.availability}</td>
              <td>{room.cleaningStatus}</td>
              <td>{room.price}</td>
              <td>{room.bedType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
};

export default RoomDetails;
