import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import { Link } from "react-router-dom";

const ViewRoom = () => {
  const [roomData, setRoomData] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

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

  const handleUpdate = (id) => {
    setSelectedRoomId(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${base_url}/room/rooms/${id}`)
      .then((response) => {
        console.log("Room deleted successfully:", response.data);
        toast.success("Room deleted successfully", {
          position: "bottom-center",
        });

        // After successful deletion, fetch the updated room data
        fetchRoomData();
      })
      .catch((error) => {
        console.error("Error deleting room:", error);
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
            <th>Actions</th>
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
              <td>
                {selectedRoomId === room.roomId ? (
                  <Link to={`/admin/update-room/${selectedRoomId}`}>
                    <Button color="primary">Update</Button>
                  </Link>
                ) : (
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(room.roomId)}
                  >
                    Update
                  </Button>
                )}
                <Button color="danger" onClick={() => handleDelete(room.roomId)}>
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

export default ViewRoom;
