import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
function Header()
{
    const[isNavOpen, setIsNavOpen] = useState('false');
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return(

        <div>
            <Navbar dark expand = "md">
                <div className="container">
                    <NavbarToggler onClick = {toggleNav} />
                            <NavbarBrand className="mr-auto" href="/">RENTZOP</NavbarBrand>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to="/residential">Residential</NavLink>
                            </NavItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to="/official">Official</NavLink>
                            </NavItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to="/postproperty">Post Properties for FREE</NavLink>
                            </NavItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to="/signin">SIGN IN</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
            </Navbar>
        </div>
    );
}
export default Header;