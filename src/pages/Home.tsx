import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Author from '../components/Author';
import HomeGallery from '../components/HomeGallery';
import CSR from '../components/CSR';
import YouTubeVideos from '../components/YouTubeVideos';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Author />
      <HomeGallery />
      <YouTubeVideos />
      <CSR />
    </main>
  );
};

export default Home;