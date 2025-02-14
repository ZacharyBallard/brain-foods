import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="navBar" light expand="md">
        <NavbarBrand href="/">🧠</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color: 'white'}}  className="nav nav-link" to="/BrainFoods">Brain Foods?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}}  className="nav nav-link" to="/FoodBank">Food Bank</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className="nav nav-link" to="/Menu">Menu</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;