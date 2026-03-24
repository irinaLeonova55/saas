import { useState } from 'react';
import Button from '../components/Button';

import check from '../assets/icons/check.svg';

function Pricing({ setIsWindow }) {
  const [rate, setRate] = useState('monthly');

  const cards = [
    {
      id: 1,
      title: 'Single Project',
      desc: 'Best for individual marketers testing AI optimization.',
      monthlyPrice: '$29',
      yearlyPrice: '$280',
      includes: [
        '1 advertising project',
        'AI campaign analysis',
        'Budget optimization recommendations',
        'Creative performance insights',
        'Basic campaign reports',
      ],
      btnText: 'Request demo',
    },
    {
      id: 2,
      title: 'Professional',
      desc: 'Perfect for growing businesses managing multiple campaigns.',
      monthlyPrice: '$79',
      yearlyPrice: '$760',
      includes: [
        'Up to 10 advertising projects',
        'Advanced AI optimization tools',
        'Automated A/B testing',
        'Predictive ROAS insights',
        'Priority analytics dashboard',
      ],
      btnText: 'Request demo',
    },
    {
      id: 3,
      title: 'Agency',
      desc: 'Built for marketing teams and agencies managing many clients.',
      monthlyPrice: '$199',
      yearlyPrice: '$1910',
      includes: [
        'Unlimited advertising projects',
        ' Multi-account management',
        'Cross-platform campaign optimization',
        'Dedicated support',
      ],
      btnText: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="w-full mt-25 sm:mt-50">
      <h2 className="max-w-160 mx-auto mb-10 sm:mb-17 text-center text-3xl md:text-5xl/14 font-bold text-[#F6F6F7]">
        Simple Pricing for Every Stage of Growth
      </h2>
      <div className="flex justify-center pb-20">
        <div className="flex justify-center items-center w-auto h-10 rounded-4xl p-1 bg-linear-to-br from-[#151934]/52 via-[#151934]/8 to-[#151934]/49 text-white border border-[#282D45]">
          <button
            className={`flex justify-center items-center min-w-26 h-8 px-1 py-1 rounded-4xl ${rate === 'monthly' ? 'bg-white text-[#060b27]' : 'bg-transparent'} `}
            onClick={() => setRate('monthly')}
          >
            Monthly
          </button>
          <button
            className={`flex justify-center items-center min-w-26 h-8 px-1 py-1 rounded-4xl ${rate === 'yearly' ? 'bg-white text-[#060b27]' : 'bg-transparent'}`}
            onClick={() => setRate('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative w-full h-auto bg-[#0E1330] p-8 rounded-xl`}
          >
            {index === 1 ? (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-translate-y-1/2 flex justify-center items-center w-full h-11 px-6 py-4 rounded-t-xl bg-[#7214FF] border-3 border-[#7214FF] text-white">
                Most Popular
              </div>
            ) : undefined}
            <h3 className="text-2xl font-semibold text-[#F6F6F7] py-3">
              {card.title}
            </h3>
            <p>{card.desc}</p>
            <div className="my-8">
              <span className="text-5xl/14 text-white">
                {rate === 'monthly' ? card.monthlyPrice : card.yearlyPrice}
              </span>{' '}
              / {rate === 'monthly' ? 'month' : 'year'}
            </div>
            <Button
              btnText={card.btnText}
              variant={index === 1 ? 'purple' : 'transparent'}
              onClick={() => setIsWindow(true)}
              ariaLabel={card.btnText}
            />
            <ul className="pt-7 min-h-52">
              {card.includes.map((include, index) => (
                <li key={index} className="flex gap-2 pb-2">
                  <img src={check} alt="check" loading="lazy"></img>
                  <span>{include}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
