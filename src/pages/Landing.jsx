import React, { useRef, useEffect } from 'react';
import Footer from '../components/Footer';
import Card from '.././components/Card';
import Navbar from '.././components/Navbar';
import QuestionsCards from '.././components/QuestionsCards';
import Projects from '../components/Projects';
import 'remixicon/fonts/remixicon.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Problems from '../components/Problems';
import CTA from '../components/CTA';

const Landing = () => {
  const ProjectsRef = useRef(null);
  const scrollToProjects = () => {
    ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const redirect = () => {
    window.open('https://cal.com/sten-kahu-qjw7mh/30min', '_blank');
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <div className="w-full bg-white dark:bg-[#131313]  relative flex mx-auto animate-in overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white dark:bg-[#131313] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <main className="z-20 mx-auto">
          <div className="bg-grid-black/[0.04] dark:bg-grid-white/[0.04] pt-5 sm:pb-14 xss:pb-[4.5rem]">
            <Navbar redirect={redirect} proj={scrollToProjects} />
            <Hero reference={ProjectsRef} />
          </div>
          <Projects reff={ProjectsRef} />
          <About />
          <Problems />
          <CTA />
          <div className="mb-32">
            <h2 className="font-serif text-5xl dark:text-white text-center mb-10">
              Questions? Answers.
            </h2>
            <QuestionsCards redirect={redirect} />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Landing;
