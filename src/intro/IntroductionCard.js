import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
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
    <Container style={{fontSize:"150%"}} className="IntroductionCard">
      <p className="IntroductionCard-p">Welcome, my name is</p>
      <h1 style={{color:"#EF709D"}} className="IntroductionCard-h1">Madelyn Romberg.</h1>
      <h2 style={{color:"#EF709D"}} className="IntroductionCard-h2">I'm a software engineer.</h2>
      <p className="IntroductionCard-p ">I'm a full-stack web developer driven to
        create exceptional applications that leave an impact,
      </p>
      <p className="IntroductionCard-p IntroductionCard-newOpp">
        <b>currently open to new opportunities.</b>
      </p>
    </Container>
  );
}

export default IntroductionCard;