import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "./Navigation.css";
/** Navigation bar for site. Scrolls only.
 *
 *
 * Homepage => Navigation
 */
//BROKEN: navbar needs help
function Navigation({ scrollContact, scrollProjects, scrollBio }) {
  console.debug("Navigation");

  return (
    <Navbar
      className="Navigation .navbar .navbar-expand{lg}"
      bg="light"
      expand="lg">
      <Navbar.Brand className="Navigation-Brand" as={Link} to="/">
        {/**<img src="/imgs/icons8-m-64.png" alt="M logo"></img>*/}
        <img
          src="https://fontmeme.com/permalink/230522/19188199589ae0a39c5b1f7eda6bd879.png"
          alt="script-fonts"
          border="0" />
      </Navbar.Brand>
      <Nav className="Navigation-nav" >
        <Navbar.Text
          className="Navigation-scroll Navigation-Madelyn"
          onClick={scrollBio}>
          <b>1.</b> Meet Madelyn
        </Navbar.Text>
        <Navbar.Text
          className="Navigation-scroll Navigation-Projects"
          onClick={scrollProjects}>
          <b>2.</b> Projects
        </Navbar.Text>
        <Navbar.Text
          className="Navigation-scroll Navigation-Contact"
          onClick={scrollContact}>
          <b>3.</b> Contact
        </Navbar.Text>
        <Navbar.Text className="Navigation-scroll">
        <a href="/files/Resume-Jan-2023.pdf"> <b>4.</b> Resume</a>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};

// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

// function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar >
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }



// return (
//   <nav className="Navigation navbar navbar-expand-md">
//     <div className="container-fluid">
//       <Link className="navbar-brand" to="/madelynromberg">
//         Madelyn Romberg
//       </Link>
//       <div className="Navigation-right container-fluid">
//         <NavLink onClick={scrollBio}>
//           <Button className="Navigation-bio">
//             Meet Madelyn
//           </Button>
//         </NavLink>

//         <Button className="Navigation-projects" onClick={scrollProjects}>
//           Projects
//         </Button>
//         <Button className="Navigation-contact" onClick={scrollContact}>
//           Contact
//         </Button>
//         <Button className="nav-link" to="/">
//           Resume
//         </Button>
//       </div>
//     </div>
//   </nav>
// );

export default Navigation;
