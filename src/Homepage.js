import { useEffect, useRef, useState } from 'react';

import BioCard from './BioCard';
import ContactInfoButtons from './ContactInfoButtons';
import Navigation from './Navigation';
import IntroductionCard from './IntroductionCard';
import "./Homepage.css";
import Carousel from './Carousel';
import projects from './githubProjects';

const title = "Recent works";
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
    // contactButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollProjects() {
    setTarget("projects");
    setIsHidden(false);
    // projectButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollBio() {
    setTarget("bio");
    setIsHidden(false);
    // bioButtonsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='HomePage'>
      <div className='HomePage HomePage-navigation'>
        <Navigation
          scrollContact={scrollContact}
          scrollProjects={scrollProjects}
          scrollBio={scrollBio} />
      </div>
      <section className={`HomePage HomePage-intro`}>
        <IntroductionCard>
        </IntroductionCard>
      </section>
      <section className={`HomePage HomePage-biography ${isHidden ? "hidden" : ""}`} ref={bioButtonsRef}>
        <h2>
          <b>1.</b> Meet Madelyn
        </h2>
        <BioCard />
      </section>
      <section className={`HomePage HomePage-projects ${isHidden ? "hidden" : ""}`}>
        <h2 ref={projectButtonsRef}> <b>2.</b> Checkout My Work on GitHub</h2>
        <Carousel projects={projects} title={title} />
      </section>
      <section ref={contactButtonsRef}>
      </section>
      <h2>
        <b className={`${isHidden ? "hidden" : ""}`}>3.</b> Let's Connect
      </h2>
      <ContactInfoButtons />
    </div>
  );
}

export default Homepage;