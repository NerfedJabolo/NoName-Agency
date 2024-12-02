import React from 'react';

const About = () => {
  const redirect = () => {
    window.open('https://cal.com/siddharth-meena/15min', '_blank');
  };
  return (
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
            We specialize in designing and developing stunning websites that are
            optimized to drive conversions. By blending creativity with
            strategic design, we turn visitors into loyal customers. Our journey
            began with a simple mission, to deliver high quality development at
            affordable prices.
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
  );
};

export default About;
