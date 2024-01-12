import React, { useState } from "react";

import { EmailIcon, GitHubIcon, LinkedInIcon } from "./Icons";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
 
const NavBar = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar {...args}>
            <NavbarBrand href="/">My Personal Website</NavbarBrand>
            <div className="d-flex flex-row">
                <div>
                    <a href="https://github.com/saltyypanda" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="contact-button"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tess-hacker-741045257/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="contact-button"/>
                    </a>
                    <a href="mailto:esh7943@rit.edu" target="_blank" rel="noopener noreferrer">
                        <EmailIcon className="contact-button"/>
                    </a>
                </div>
                <NavbarToggler className={"hamburger mx-3"} onClick={toggle} />
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
 
export default NavBar;