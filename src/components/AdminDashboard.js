import React from "react";
import { Col, Container, ListGroup, Row } from "reactstrap";
import { Link, Outlet } from "react-router-dom";




const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar">
          <h3>Welcome to Admin Page</h3>
          <ListGroup>
            <Link to="/admin/add-employee" className="list-group-item">
              Add Employee
            </Link>
            <Link to="/admin/view-employee" className="list-group-item">
              View Employee
            </Link>
            {/* <Link to="/admin/update-employee" className="list-group-item">
              Update Employee
            </Link> */}

            <Link to="/admin/add-rooms" className="list-group-item">
              Add Rooms
            </Link>
            <Link to="/admin/view-rooms" className="list-group-item">
              View Rooms
            </Link>
            <Link to="/logout" className="list-group-item">
              Logout
            </Link>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={9} className="main-content">
          <Outlet />
          <img src="./image/swimming-pool.jpg" alt="" width={1200} height={800}/>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
