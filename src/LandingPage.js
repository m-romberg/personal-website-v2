import { Button } from "react-bootstrap";

/**
 * LandingPage
 * Visual Component for landing page
 *
 * Direct to homepage
 *
 * @param {fn} enter
 * @returns
 */
function LandingPage({ enter }) {
  return (
    <div className="LandingPage">
      <p className="LandingPage-p">Welcome, my name is</p>
      <h1 className="LandingPage-h1">Madelyn Romberg.</h1>
      <h2 className="LandingPage-h2">I'm a software engineer.</h2>
      <p className="LandingPage-p ">I'm a full-stack web developer driven to
        create exceptional applications that leave an impact,
        <p className="LandingPage-p LandingPage-newOpp">
          <b>currently open to new opportunities.</b>
        </p>
      </p>
      <Button onClick={enter}>
        ENTER
      </Button>
    </div>
  );
}

export default LandingPage;