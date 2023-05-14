import BioCard from './BioCard';
import ContactInfoButtons from './ContactInfoButtons';
import Navigation from './NavBar';

function Homepage() {
  return (
    <div className='HomePage'>
      <Navigation />
      <section className='HomePage-biography'>
        <h1>
          Meet Madelyn
        </h1>
       <BioCard />
      </section>
      <ContactInfoButtons />
    </div>

  );
}

export default Homepage;