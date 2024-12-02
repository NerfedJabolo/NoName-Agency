import React from 'react';
import Card from './Card';

const Problems = () => {
  return (
    <>
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
    </>
  );
};

export default Problems;
