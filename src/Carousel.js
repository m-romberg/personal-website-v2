import { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - projects: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */

function Carousel({ projects }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = projects[currCardIdx];
  const total = projects.length;

  const leftIconHidden = (currCardIdx === 0) ? "hidden" : "";
  const rightIconHidden = (currCardIdx === total - 1) ? "hidden" : "";

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <Container className="Carousel">
      <Container className="Carousel-main">
        <Row>
        <Col>
        <img
          className={`Carousel-arrow ${leftIconHidden}`}
          src="/imgs/btns/icons8-arrow-50 (1).png"
          onClick={goBack}
          alt="go backward button"
        />
        </Col>
        <Col>
        <Card
          description={currCard.description}
          url={currCard.url}
          title={currCard.name}
          img={currCard.img}
        />
        </Col>
        <Col>
        <img
          className={`Carousel-arrow ${rightIconHidden}`}
          src="/imgs/btns/icons8-arrow-50.png"
          onClick={goForward}
          alt="go forward button"
        />
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Carousel;
