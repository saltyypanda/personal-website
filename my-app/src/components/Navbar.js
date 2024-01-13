import React from "react";

import { StarIcon } from "./Icons";

import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';
 
const NavBar = (args) => {
    return (
        <Navbar {...args}>
            <NavbarBrand href="/">
                <StarIcon className={'w-30 h-30'}/>
            </NavbarBrand>
            <div className="d-flex flex-row">
                <a href="/" className="page-link">projects</a>
                <a href="/" className="page-link">about</a>
                <a href="/" className="page-link">resume</a>
            </div>
        </Navbar>
    );
};
 
export default NavBar;