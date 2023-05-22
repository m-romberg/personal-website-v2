import { Button } from "react-bootstrap";
import "./IntroductionCard.css";

/**
 * LandingPage
 * Visual Component for landing page
 *
 * Direct to homepage
 *
 * @param {fn} enter
 * @returns
 */
function IntroductionCard({ enter }) {
  return (
    <div className="IntroductionCard">
      <p className="IntroductionCard-p">Welcome, my name is</p>
      <h1 className="IntroductionCard-h1">Madelyn Romberg.</h1>
      <h2 className="IntroductionCard-h2">I'm a software engineer.</h2>
      <p className="IntroductionCard-p ">I'm a full-stack web developer driven to
        create exceptional applications that leave an impact,
        <p className="IntroductionCard-p IntroductionCard-newOpp">
          <b>currently open to new opportunities.</b>
        </p>
      </p>
      {/**<h2 className="LandingPage-enter" onClick={enter}>
        ENTER
  </h2>*/}

    </div>
  );
}

export default IntroductionCard;