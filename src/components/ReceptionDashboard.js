import React from "react";
import { Col, Container, ListGroup, Row } from "reactstrap";
import { Link, Outlet } from "react-router-dom";

const ReceptionDashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar">
          <h3>Welcome to Reception Dashboard</h3>
          <ListGroup>
            <Link to="/reception/new-customer" className="list-group-item">
              New Customer Form
            </Link>

            <Link to="/reception/room-details" className="list-group-item">
              Room Details
            </Link>
            <Link to="/reception/all-employee-info" className="list-group-item">
              Employee info
            </Link>
            <Link to="/reception/customer-info" className="list-group-item">
              Customer Info
            </Link>
            <Link to="/reception/manager-info" className="list-group-item">
              Manager info
            </Link>
            <Link to="/reception/checkout" className="list-group-item">
              Check Out
            </Link>
            <Link to="/logout" className="list-group-item">
              Logout
            </Link>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={9} className="main-content">
          <Outlet />
          <img
            src="./image/istockphoto-1279050214-612x612.jpg"
            alt=""
            width={1200}
            height={800}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ReceptionDashboard;
