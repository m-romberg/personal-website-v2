import Image from 'react-bootstrap/Image';
import Biography from './Biography';
import {Row, Col } from 'react-bootstrap';
import "./BioCard.css";
/**
 * Display bio and profile photo
 */
function BioCard() {
  return (
    <section className='BioCard'>
      <Row>
        <Col md={4} sm={12}>
          <Image className="BioCard-Profile-Pic"
            src="/imgs/professionalphoto.jpg"
            rounded={true}
            width={`300px`}>
          </Image>
        </Col>
        <Col md={8} sm={12}>
          <Biography className="BioCard-Biography" />
        </Col>
      </Row>
    </section>
  );
}

export default BioCard;