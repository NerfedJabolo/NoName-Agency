import React from 'react';

const CTA = () => {
  const redirect = () => {
    window.open('https://cal.com/siddharth-meena/15min', '_blank');
  };
  return (
    <div className="mb-24 pt-14 bg-dot-[#D6D5D5] dark:bg-dot-[#333333] pb-16 border rounded-2xl border-black dark:border-white md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto w-full">
      <div className="relative w-full">
        <h2 className="relative z-10 text-center text-[1.8rem] dark:text-white xss:text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xss:font-inter xss:font-bold sm:font-semibold sm:tracking-[0.032em] leading-[1.3] sm:leading-[1.12] sm:px-4 xss:px-6 ">
          <span className=" sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
            Your website is your{' '}
            <span className="text-[#007D98] dark:text-[#299fba] backdrop-filter backdrop-blur-[2px]">
              24/7 salesman
              <span className="xss:opacity-100 sm:opacity-0">.</span>
            </span>
          </span>
          <span className="sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
            Don't just settle for an ordinary one.
          </span>
          <span className="sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
            Go{' '}
            <span className="text-[#00982A] dark:text-[#0cff51]">beyond</span>{' '}
            with Luvo
          </span>
        </h2>
      </div>
      <div className="flex mt-8 w-full justify-center">
        <button
          onClick={() => redirect()}
          className="px-[4.5vw] py-[1.9vw] xss:py-[0.65rem] xss:px-[1.18rem] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.7rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white text-[3.5vw] xs:text-[3vw] sm:text-[1rem] md:text-[1.2rem] font-pop font-medium rounded-full"
        >
          Schedule a Meeting
          <i className="ri-arrow-right-line ml-2 text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default CTA;
