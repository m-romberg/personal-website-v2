import "./Navigation.css";
// import { useState } from "react";


// function Navigation({ scrollContact, scrollProjects, scrollBio }) {
//   // Navbar.js

//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   return (
//     <nav className="navigation">
//       <a href="/" className="brand-name">
//         <img
//           src="https://fontmeme.com/permalink/230522/19188199589ae0a39c5b1f7eda6bd879.png"
//           alt="logo"
//           border="0"
//         />
//       </a>
//       <button className="hamburger" onClick={() => {
//         setIsNavExpanded(!isNavExpanded);
//       }}
//       >
//         {/* icon from heroicons.com */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="white"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       <div
//         className={
//           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//         }
//       >
//         <ul>
//           <li
//             onClick={scrollBio}>
//             <p><b>1.</b> Meet Madelyn</p>
//           </li>
//           <li
//             onClick={scrollProjects}>
//             <p><b>2.</b> Projects</p>
//           </li>
//           <li
//             onClick={scrollContact}>
//             <p><b>3.</b> Contact</p>
//           </li>
//           <li >
//             <p> <b>4.</b> Resume</p>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;

import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
  "Navigation-Navbar":{backgroundColor: "white", minWidth:"100%", justifyContent:"space-between"},
  "Navlink":{color:"#190B28"},
  "Nav": {textAlign:"right"}
}

function Navigation({ scrollContact, scrollProjects, scrollBio }) {
  return (
    <Container>
    <Navbar style={styles["Navigation-Navbar"]} expand="lg">
      <Container>
        <Row>
          <Col>
            <Navbar.Brand href="/">
              <img
                src="https://fontmeme.com/permalink/230522/19188199589ae0a39c5b1f7eda6bd879.png"
                alt="logo"
                border="0"
                width={"70%"}
              />
            </Navbar.Brand>
            </Col>
            <Col >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav style={styles.Nav} >
                <Nav.Link className="Navigation-link" style={styles.Navlink} onClick={scrollBio} >Meet Madelyn</Nav.Link>
                <Nav.Link className="Navigation-link" style={styles.Navlink} onClick={scrollProjects}>Projects</Nav.Link>
                <Nav.Link className="Navigation-link" style={styles.Navlink} onClick={scrollContact}>Contact me</Nav.Link>
                <Nav.Link className="Navigation-link" href="/files/MadelynRomberg-Resume-Current.pdf">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Navigation;