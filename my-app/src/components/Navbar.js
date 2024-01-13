import React from "react";

import { StarIcon } from "./Icons";
import resume from '../data/resume.pdf'

import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';
 
const NavBar = (args) => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf'; // Replace with the desired file name
        link.click();
    }

    return (
        <Navbar {...args}>
            <NavbarBrand href="/">
                <a href="/">
                    <StarIcon className={'w-30 h-30'}/>
                </a>
            </NavbarBrand>
            <div className="d-flex flex-row">
                <a href="/about" className="page-link">about</a>
                <a href="/" className="page-link">projects</a>
                <a href="/" className="page-link">experience</a>
                <a href="/" onClick={handleResumeDownload} className="page-link">resume</a>
            </div>
        </Navbar>
    );
};
 
export default NavBar;