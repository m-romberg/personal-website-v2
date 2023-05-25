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
              width={`30%`}>
            </Image>
            <Biography className="BioCard-Biography" />
            <div>
              <img className='signature' src="https://fontmeme.com/permalink/230522/ce570d14c27f8534e2fa03b85baa1a44.png" alt="script-fonts" border="0"/>
          </div>
    </section>
  );
}

export default BioCard;