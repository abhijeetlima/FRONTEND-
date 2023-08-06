import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import AdminDashboard from "./components/AdminDashboard";
import Base from "./components/Base";
import AddEmployee from "./components/AddEmployee";
import AddRooms from "./components/AddRooms";
import ReceptionDashboard from "./components/ReceptionDashboard";
import NewCustomerForm from "./pages/NewCustomerForm";
import RoomDetails from "./pages/RoomDetails";
import AllEmployeeInfo from "./pages/AllEmployeeInfo";
import CustomerInfo from "./pages/CustomerInfo";
import ManagerInfo from "./pages/ManagerInfo";
import Checkout from "./pages/Checkout";
import ViewEmployees from "./components/ViewEmployees";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewRoom from "./components/ViewRoom";
import UpdateRoom from "./components/UpdateRoom";
import UpdateCustomer from "./pages/UpdateCustomer";
import { RoomProvider } from "./pages/RoomContext";
import Contact from "./components/Contact";

function App() {
  const [updateEmployeeId, setUpdateEmployeeId] = useState(null);

  const handleUpdateEmployeeId = (id) => {
    setUpdateEmployeeId(id);
  };
  // const handleReceptionClick = () => {
  //   // Custom logic to handle the reception button click
  //   // In this case, we will redirect to the login page
  //   window.location.href = "/login";
  // };

  return (
    <div className="App">
      <Router>
        <Base />
        <RoomProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route exact path="/admin" element={<AdminDashboard />} />

            <Route path="/about" element={<About />} />

            {/* Admin Dashboard */}
            <Route path="/admin/*" element={<AdminDashboard />}>
              <Route path="add-employee" element={<AddEmployee />} />
              <Route path="add-rooms" element={<AddRooms />} />
              <Route path="view-rooms" element={<ViewRoom />} />
              <Route path="view-employee" element={<ViewEmployees />} />
              <Route
                path="update-employee/:employeeId"
                element={<UpdateEmployee />}
              />
              <Route path="update-room/:roomId" element={<UpdateRoom />} />
              {/* Add more nested routes for Admin Dashboard */}
            </Route>

            {/* Reception Dashboard */}
            <Route path="/reception/*" element={<ReceptionDashboard />}>
              <Route path="new-customer" element={<NewCustomerForm />} />
              <Route path="room-details" element={<RoomDetails />} />
              <Route path="all-employee-info" element={<AllEmployeeInfo />} />
              <Route path="customer-info" element={<CustomerInfo />} />
              <Route
                path="update-customer/:customerId"
                element={UpdateCustomer}
              />
              <Route path="manager-info" element={<ManagerInfo />} />
              <Route path="checkout" element={<Checkout />} />
              {/* Add more nested routes for Reception Dashboard */}
            </Route>
          </Routes>
        </RoomProvider>
      </Router>
    </div>
  );
}

export default App;
