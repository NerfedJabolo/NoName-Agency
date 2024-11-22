import React, { useRef, useEffect } from 'react';
import Layout from '.././components/Layout/layout';
import Footer from '../components/Footer';
import Card from '.././components/Card';
import Navbar from '.././components/Navbar';
import QuestionsCards from '.././components/QuestionsCards';
import Meetings from '../components/Meetings';
import Projects from '../components/Projects';
import TextScramble from '../components/TextScramble';
import 'remixicon/fonts/remixicon.css';

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
        <main className=" z-20 mx-auto">
          <div className="bg-grid-black/[0.04] dark:bg-grid-white/[0.04] pt-5 sm:pb-14 xss:pb-[4.5rem]">
            <Navbar redirect={redirect} proj={scrollToProjects} />
            <div className="sm:pt-[6.9rem] xss:pt-[15vh] text-center">
              <h1 className="font-serif dark:text-white lg:text-[5.3rem] md:text-[5rem] sm:text-[10vw] xs:text-[10.3vw] xss:text-[11.2vw] leading-[1.15]">
                <TextScramble phrases={['Get Your Website']} />
                <span className="block mt-0">
                  <TextScramble phrases={['Built by ']} />
                  {/* Built by{' '} */}
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
                  onClick={() => redirect()}
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
              {/* <div className="flex justify-center items-center sm:mt-8 xss:mt-5 space-x-8 opacity-90 sm:space-x-4 xs:space-x-3 xss:space-x-2.5">
                <img
                  src="google.png"
                  alt="Google Logo"
                  className="h-12 w-auto sm:h-10 xs:h-[8vw] xss:h-[8vw] dark:invert"
                />
                <img
                  src="buzz.png"
                  alt="Buzz Logo"
                  className="h-24 w-auto sm:h-20 xs:h-[16vw] xss:h-[14vw] dark:invert"
                />
                <img
                  src="mit.png"
                  alt="MIT Logo"
                  className="h-8 w-auto sm:h-7 xs:h-[5vw] xss:h-[4.6vw] dark:invert"
                />
                <img
                  src="forbes.png"
                  alt="Forbes Logo"
                  className="h-10 w-auto sm:h-8 xs:h-[6vw] xss:h-[6vw] dark:invert"
                />
              </div> */}
            </div>
          </div>

          {/* To Do = Fix stutter */}
          <Projects reff={ProjectsRef} />
          {/* <div className='flex md:w-[80vw] mx-auto max-w-[1920px] sm:w-[90vw] xss:w-[95vw] justify-center'> */}
          {/* <div className="h-[1px] mt-10 w-[90vw] bg-black opacity-25"></div> */}
          {/* </div> */}
          <div className="pb-14 border-b border-black/30 dark:border-white/30 mt-14 md:w-[85vw] sm:w-[90vw] xss:w-[92vw] mx-auto max-w-[1920px]">
            <h2 className="border-[1.5px] px-4 font-normal py-1.5 rounded-3xl border-black dark:border-white font-pop text-lg w-auto inline-block dark:text-white">
              About Us
            </h2>
            <div className="mt-4 md:flex justify-between w-full">
              <div className="w-[50%] md:mb-[0rem] xss:mb-[1rem]">
                <h2 className="font-serif lg:text-[3.1vw] md:text-[2rem] xss:text-[1.9rem] sm:text-[2rem] min-w-[490px] leading-[1.15] dark:text-white">
                  Creating Websites That <br /> Increase Your Sales
                </h2>
                <div className="flex items-center space-x-4 md:mt-6 xss:mt-4 w-[490px]">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="./eee.jpg"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="./4780253t1hd917(1).png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="./Sille24-1(1).png"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="h-9 w-[1.15px] bg-black dark:bg-white opacity-50"></div>
                  <div>
                    <div className="flex text-[#ffac33]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-medium unselectable text-black dark:text-white">
                      loved by founders worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] md:w-[45%]">
                <p className="font-pop lg:text-[1.04rem] md:text-[0.9rem] xss:text-[0.85rem] tracking-[-0.002em] lg:leading-[1.45rem] md:leading-[1.3rem] xss:leading-[1.25rem] dark:text-gray-300">
                  We specialize in designing and developing stunning websites
                  that are optimized to drive conversions. By blending
                  creativity with strategic design, we turn visitors into loyal
                  customers. Our journey began with a simple mission, to deliver
                  high quality development at affordable prices.
                </p>
                <button
                  onClick={() => redirect()}
                  className="sm:px-[1.42rem] xss:px-[2rem] xss:py-[0.7rem] xss:text-lg mt-5 sm:py-[0.4rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white sm:text-base font-pop font-medium rounded-full sm:w-auto xss:w-[calc(100%)] xss:mx-auto sm:mx-0 xss:block dark:bg-[#14882f] dark:border-[#14882f] dark:hover:bg-[#1e802e] dark:hover:border-[#1e802e]"
                >
                  Let's Chat
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10 md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto">
            <h2 className="font-serif text-5xl dark:text-white text-center">
              Problems Being Faced
            </h2>
            <div className="flex flex-wrap justify-center mt-14">
              {[
                {
                  imageUrl: 'icon-park_attention.png',
                  rgb: true,
                  title: 'Outdated Designs',
                  description:
                    'Outdated websites fail to capture users attention, and engage them, often appearing less credible and less appealing.',
                },
                {
                  imageUrl: 'fxemoji_moneybag.png',
                  rgb: true,
                  title: 'Costly Developers',
                  description:
                    'With an average developer salary of $110,585 in USA, costs can be high. We provide the same quality work for a fraction of the price.',
                },
                {
                  imageUrl: 'time.png',
                  rgb: true,
                  title: 'Slow Development',
                  description:
                    'Delays can impact your financial goals. Our team of developers worldwide speeds up the process, ensuring faster results.',
                },
              ].map((card, index, array) => (
                <div
                  key={index}
                  className={`w-full sm:w-1/2 lg:w-1/3 mb-8 ${
                    array.length > 1 ? 'px-4' : ''
                  }`}
                >
                  <Card
                    imageUrl={card.imageUrl}
                    title={card.title}
                    rgb={card.rgb}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pt-10 md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto">
            <h2 className="font-serif text-5xl text-center text-[#00982a]">
              Our Approach
            </h2>
            <div className="flex flex-wrap justify-center mt-14">
              {[
                {
                  imageUrl: 'responsive.png',
                  rgb: false,
                  title: 'Fully Responsive',
                  description:
                    'Your website will work on all mobile, tablets, and desktop screen sizes, so your clients can access your website from anywhere.',
                },
                {
                  imageUrl: 'conver.png',
                  rgb: false,
                  title: 'Conversion Focused',
                  description:
                    'We craft an experience that engages and converts, turning visitors into loyal customers, by focusing on what drives them to action.',
                },
                {
                  imageUrl: 'moni.png',
                  rgb: false,
                  title: 'Affordable',
                  description:
                    'Delays can impact your financial goals. Our team of developers worldwide speeds up the process, ensuring faster results.',
                },
              ].map((card, index, array) => (
                <div
                  key={index}
                  className={`w-full sm:w-1/2 lg:w-1/3 mb-8 ${
                    array.length > 1 ? 'px-4' : ''
                  }`}
                >
                  <Card
                    imageUrl={card.imageUrl}
                    title={card.title}
                    rgb={card.rgb}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>
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
                  <span className="text-[#00982A] dark:text-[#0cff51]">
                    beyond
                  </span>{' '}
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
