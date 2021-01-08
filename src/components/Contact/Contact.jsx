import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const { contact, timings } = useContext(PortfolioContext);
  const { cta } = contact;
  const { duration, delay } = timings;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={duration} delay={delay} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <ContactForm />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
