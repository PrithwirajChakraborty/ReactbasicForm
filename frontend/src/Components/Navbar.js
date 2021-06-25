import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">PRITHWIRAJ</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav textCenter>
                            <NavItem eventKey={1} >
                                <NavLink to="/Profile">Dashboard</NavLink>
                            </NavItem>
                            {/* <NavItem eventKey={2} href="#">
                                Dashboard
                        </NavItem> */}
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} >
                                <NavLink to="/">Login</NavLink>
                            </NavItem>  
                            <NavItem eventKey={2} >
                                <NavLink to="/SignUp">Signup</NavLink>
                            </NavItem>
                            <NavItem eventKey={3} >
                                <NavLink to="/SignUp">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;



