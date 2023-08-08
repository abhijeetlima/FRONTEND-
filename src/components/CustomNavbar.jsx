import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaHotel } from 'react-icons/fa';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <Navbar className="navbar-custom" dark expand="md">
      <NavbarBrand tag={Link} to="/">
        ABHIJIT GROUPS
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" className="nav-link">
            <FaHome className="nav-icon" />
            Home
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink tag={Link} to="/login" className="nav-link">
            <FaLock className="nav-icon" />
            Login
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink tag={Link} to="/login" className="nav-link">
            <FaHotel className="nav-icon" />
            Reception
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin" className="nav-link">
            <FaUser className="nav-icon" />
            Admin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact" className="nav-link">
            <FaUser className="nav-icon" />
            Contact Us
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
