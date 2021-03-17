import React, { useState } from 'react';
import {Card, CardImg, CardImgOverlay, Input, Button} from 'reactstrap';
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
            <Card>
                <CardImg width = "100%" object src="/Search.png" alt="Search buildings" />
                <CardImgOverlay>
                    <div className="row justify-content-center">
                        <div className = "col-3 col-sm-2">
                        <select id = "type" name = "rent" className = "type" >
                            <option value = "Commercial">COMMERCIAL</option>
                            <option value = "Residential">RESIDENTIAL</option>
                        </select>
                        </div>
                        <div className="col-7 col-sm-5">
                        <Input type="text" name="search" className="search-bar" />
                        </div>
                        <div className="col-2 col-sm-2">
                        <Button type="submit" className="search-btn" onClick = "">Search</Button>
                        </div>
                    </div>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default Header;