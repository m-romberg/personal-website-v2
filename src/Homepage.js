import BioCard from './BioCard';
import ContactInfoButtons from './ContactInfoButtons';
import Navigation from './NavBar';
import ProjectCardList from './ProjectCardList';

function Homepage({projects}) {
  return (
    <div className='HomePage'>
      <Navigation />
      <section className='HomePage-biography'>
        <h1>
          Meet Madelyn
        </h1>
       <BioCard />
      </section>
      <section className='HomePage-projects'>
      <h1> Checkout My Work on GitHub</h1>
        <ProjectCardList projects={projects}/>
      </section>
      <ContactInfoButtons />
    </div>

  );
}

export default Homepage;