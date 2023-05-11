import Image from 'react-bootstrap/Image'
import Biography from './Biography';
import { Card } from 'react-bootstrap';
/**
 * Display bio and profile photo
 */
function BioCard () {
  return (
    <Card className='BioCard'>
    <Image src="/imgs/professionalphoto.jpg" rounded={true} width={`400px`}>
    </Image>
    <Biography />
    </Card>
  )
}

export default BioCard;