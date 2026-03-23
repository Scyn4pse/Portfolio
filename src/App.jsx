import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/hero/Hero';
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import FeaturedWorks from './components/featuredWorks/FeaturedWorks';
import WorkExperience from './components/workExperience/WorkExperience';
import TechStack from './components/techStack/TechStack';
import Hackathons from './components/awards/Hackathons';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Chatbot from './components/layout/Chatbot';

function App() {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <FeaturedWorks />
      <WorkExperience />
      <TechStack />
      <Hackathons />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
