import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import { Link } from "react-router-dom";
import UpdateCustomer from "./UpdateCustomer";


const CustomerInfo = () => {
  const [customerData, setCustomerData] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = () => {
    axios
      .get(`${base_url}/customer/`)
      .then((response) => {
        console.log("Customer details:", response.data);
        toast.success("Customers have been loaded", {
          position: "bottom-center",
        });
        setCustomerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  const handleUpdate = (id) => {
    console.log("Update button clicked for customerId:", id);
    setSelectedCustomerId(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${base_url}/customer/${id}`)
      .then((response) => {
        console.log("Customer deleted successfully:", response.data);
        toast.success("Customer deleted successfully", {
          position: "bottom-center",
        });

        // After successful deletion, fetch the updated customer data
        fetchCustomerData();
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  return (
    <Container>
      <h1>Customer Details</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Allocated Room</th>
            <th>Deposit</th>
            <th>Check-in Time</th>
            <th>Document Type</th>
            <th>Document Number</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.name}</td>
              <td>{customer.gender}</td>
              <td>{customer.country}</td>
              <td>{customer.allocatedRoom}</td>
              <td>{customer.deposit}</td>
              <td>{customer.checkIn}</td>
              <td>{customer.document}</td>
              <td>{customer.documentNo}</td>
              <td>{customer.phone}</td>
              <td>
                {selectedCustomerId === customer.customerId ? (
                  <Link to={`/reception/update-customer/${selectedCustomerId}`}>
                    <Button color="primary">Update</Button>
                  </Link>
                ) : (
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(customer.customerId)}
                  >
                    Update
                  </Button>
                )}
                <Button
                  color="danger"
                  onClick={() => handleDelete(customer.customerId)}
                >
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

export default CustomerInfo;

