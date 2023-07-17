import { Link } from "react-router-dom";
import {  useState } from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import "./ContactInfoButtons.css";

const GITHUB_URL = "https://github.com/m-romberg";
const LINKEDIN_URL = "https://www.linkedin.com/in/madelyn-romberg/";
const EMAIL = "madelynromberg@g.ucla.edu";
function ContactInfoButtons() {
  const [isCopied, setIsCopied] = useState(false);
  const emailCopyMsg = "Email copied to clipboard."

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setIsCopied(true);

    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000)
    return () => clearTimeout(timer)
  }


  return (
    <Container className="ContactInfoButtons">
      <Container className="ContactInfoButtons-msg">
        { isCopied && <p>{emailCopyMsg}</p>}
      </Container>
      <Link to={GITHUB_URL} >
        <img src="/imgs/btns/icons8-github-50.png" alt="github url"></img>
      </Link>
      <Link to={LINKEDIN_URL}>
        <img src="/imgs/btns/icons8-linkedin-50.png" alt="linkedIn url"></img>
      </Link>
      <img className="ContactInfoButtons-email"
        src="/imgs/btns/icons8-email-50.png"
        alt="email"
        onClick={copyEmail}>
      </img>
    </Container>
  );
}

export default ContactInfoButtons;