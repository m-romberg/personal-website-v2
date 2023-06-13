import Image from 'react-bootstrap/Image';
import Biography from './Biography';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./BioCard.css";
/**
 * Display bio and profile photo
 */
function BioCard() {
  return (
    <Container style={{display: "flex", flexFlow: "row wrap", alignItems:'center'}} className='BioCard'>
      <Row>
        <Col lg={{span: 6}}>
          <Image className="BioCard-Profile-Pic"
            src="/imgs/professionalphoto.jpg"
            width={`70%`}>
          </Image>
        </Col>
        <Col lg={{span: 6}}>
          <Biography className="BioCard-Biography" />
          <div>
            <img className='signature' src="https://fontmeme.com/permalink/230522/ce570d14c27f8534e2fa03b85baa1a44.png" alt="script-fonts" border="0" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BioCard;