import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import BioCard from './BioCard';
import ContactInfoButtons from './ContactInfoButtons';
import Navigation from './Navigation';
import IntroductionCard from './IntroductionCard';
import "./Homepage.css";
import Carousel from './Carousel';
import { Container} from 'react-bootstrap';
import { Footer } from './Footer';

function Homepage({ projects }) {
  console.log("Homepage");
  const contactButtonsRef = useRef(null);
  const projectButtonsRef = useRef(null);
  const bioButtonsRef = useRef(null);

  const [isHidden, setIsHidden] = useState(true);
  const [target, setTarget] = useState(null);

  console.log("isHidden=", isHidden);

  useEffect(() => {
    if (!isHidden && target) {
      if (target === "bio") {
        bioButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (target === "projects") {
        projectButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (target === "contact") {
        contactButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isHidden, target]);

  function scrollContact() {
    setTarget("contact");
    setIsHidden(false);
    contactButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollProjects() {
    setTarget("projects");
    setIsHidden(false);
    projectButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollBio() {
    setTarget("bio");
    setIsHidden(false);
    bioButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const styles = {
    container:{
      paddingTop:"3%"
    },
    containerFooter:{
      padding:"3%"
    }
  }
  return (
    <Container className='HomePage'>
          <Container style={styles.container} className='HomePage HomePage-navigation'>
            <Navigation
              scrollContact={scrollContact}
              scrollProjects={scrollProjects}
              scrollBio={scrollBio} />
          </Container>
          <Container style={styles.container} className={`HomePage HomePage-intro`}>
            <IntroductionCard>
            </IntroductionCard>
          </Container>
          <Container style={styles.container} className={`HomePage HomePage-biography ${isHidden ? "hidden" : ""}`} ref={bioButtonsRef}>
            <h2 style={{color:"#EF709D"}}>
              <b>01.</b> Meet Madelyn
            </h2>
            <BioCard />
          </Container>
          <Container style={styles.container} className={`HomePage HomePage-projects ${isHidden ? "hidden" : ""}`}>
            <h2 style={{color:"#EF709D"}} ref={projectButtonsRef}> <b>02.</b> Checkout My Work on GitHub</h2>
            <Carousel projects={projects} />
          </Container>
          <Container style={styles.container} ref={contactButtonsRef}>
            <h2 style={{color:"#EF709D"}}>
              <b className={`${isHidden ? "hidden" : ""}`}>03.</b> Let's Connect
            </h2>
            <ContactInfoButtons />
          </Container>
          <Container fix="bottom" style={styles.containerFooter}>
            <Footer />
          </Container>
    </Container>
  );
}

export default Homepage;