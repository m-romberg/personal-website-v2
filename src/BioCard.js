import Image from 'react-bootstrap/Image';
import Biography from './Biography';
import { Row, Col, Container } from 'react-bootstrap';
import "./BioCard.css";
/**
 * Display bio and profile photo
 */
function BioCard() {
  return (
    <section className='BioCard'>
            <Image className="BioCard-Profile-Pic"
              src="/imgs/professionalphoto.jpg"
              rounded={true}
              width={`300px`}>
            </Image>
            <Biography className="BioCard-Biography" />
    </section>
  );
}

export default BioCard;