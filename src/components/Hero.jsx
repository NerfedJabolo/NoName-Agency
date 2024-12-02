import React from 'react';
import TextScramble from './TextScramble';

const Hero = ({ reference }) => {
  const scrollToProjects = () => {
    reference.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const redirect = () => {
    window.open('https://cal.com/siddharth-meena/15min', '_blank');
  };

  return (
    <div className="sm:pt-[6.9rem] xss:pt-[15vh] text-center">
      <h1 className="font-serif dark:text-white lg:text-[5.3rem] md:text-[5rem] sm:text-[10vw] xs:text-[10.3vw] xss:text-[11.2vw] leading-[1.15]">
        <TextScramble phrases={['Get Your Website']} />
        <span className="block mt-0">
          <TextScramble phrases={['Built by ']} />
          <span className="text-[#00982a] relative">
            <TextScramble phrases={['Experts']} />
          </span>
        </span>
      </h1>
      <h3 className="font-pop md:max-w-[31rem] sm:max-w-[25rem] xs:max-w-[25rem] xss:max-w-[80%] mx-auto lg:text-[1rem] md:text-[1rem] sm:text-[0.8rem] xs:text-[0.75rem] xss:text-[0.75rem] font-medium tracking-[0.05em] lg:mt-[1.1rem] md:mt-[0.95vh] sm:mt-[1.5vh] xss:mt-[1.35vh] text-center text-[#383838] dark:text-[#c1c1c1]">
        We create beautiful, fast websites that are designed to Increase
        conversions and boost your online presence.
      </h3>
      <div className="space-x-2 xs:space-x-3 sm:space-x-4 md:mt-6 sm:mt-5 xss:mt-3">
        <button
          onClick={redirect}
          className="px-[4.5vw] py-[1.9vw] xss:py-[0.65rem] xss:px-[1.35rem] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.6rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white text-[3.5vw] xs:text-[3vw] sm:text-[1rem] md:text-[1.2rem] font-pop font-medium rounded-full"
        >
          Inquire Now
        </button>
        <button
          onClick={scrollToProjects}
          className="px-[4.5vw] py-[1.9vw] xss:py-[0.65rem] xss:px-[1.18rem] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.6rem] border border-black dark:border-white text-black dark:text-white text-[3.5vw] xs:text-[3vw] sm:text-[1rem] md:text-[1.2rem] font-pop hover:scale-[1.03] font-medium rounded-full backdrop-filter backdrop-blur-sm transition-all hover:bg-black hover:bg-opacity-[0.03]"
        >
          View Projects
        </button>
      </div>
      <h5 className="mb-14 sm:mt-3 xss:mt-1.5 sm:text-sm xss:text-xs dark:text-white leading-5 opacity-50 italic">
        No Signup needed, No subscription required.
      </h5>
    </div>
  );
};

export default Hero;
