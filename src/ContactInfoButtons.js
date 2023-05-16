import { Link } from "react-router-dom";
import {  useState } from "react";
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
    <div className="ContactInfoButtons">
    <h2 className="ContactInfoButtons-header"> Let's Connect </h2>
      <div className="ContactInfoButtons-msg">
        { isCopied && <p>{emailCopyMsg}</p>}
      </div>
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
    </div>
  );
}

export default ContactInfoButtons;