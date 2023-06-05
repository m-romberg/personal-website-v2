import { Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "./Card.css";

/** Card: displays image.
 *
 * Props:
 * - capdescriptiontion: string describing the image
 * - src: string for the image link
 * - currNum: integer for what image we're on
 * - totalNum: integer for how many images are in the collection
 *
 * State:
 * - none
 *
 * App --> Carousel --> Card
 */

function Card({ title, url, description, img }) {

  return (
    <Container style={{display: "flex", flexFlow: "row wrap", alignItems:'center'}} className="Card">
    <Row>
      <a href={url}>
      <Col>
        <h4 className="Card-title">{title}</h4>
          <img className="Card-image" src={img} alt={description} />
        <small className="Card-small">
          {description}
        </small>
      </Col>
      </a>
    </Row>
    </Container>
  );
}

export default Card;
