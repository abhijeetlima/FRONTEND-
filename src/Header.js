import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";

const Header = () => {
  return (
    <div>
         <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">ABHJIT HOTELS</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/reception">Reception</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
            {/* Add more NavItems for other pages */}
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header;
