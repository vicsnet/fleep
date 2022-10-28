import React from 'react'
import Faq from '../componets/Faq';
import Footer from '../componets/Footer';
import Memories from '../componets/Memories';
import Navbar from '../componets/Navbar';
import Testimonial from '../componets/Testimonial';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Memories />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default LandingPage