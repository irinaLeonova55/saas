import featuresIcon1 from '../assets/icons/features-1.svg';
import featuresIcon2 from '../assets/icons/features-2.svg';
import featuresIcon3 from '../assets/icons/features-3.svg';
import featuresIcon4 from '../assets/icons/features-4.svg';
import featuresIcon5 from '../assets/icons/features-5.svg';
import featuresIcon6 from '../assets/icons/features-6.svg';

function Features() {
  const features = [
    {
      id: 1,
      icon: featuresIcon1,
      title: 'AI Campaign Analysis',
      desc: 'Our AI continuously analyzes campaign performance to identify opportunities and improve advertising efficiency.',
    },
    {
      id: 2,
      icon: featuresIcon2,
      title: 'Smart Budget Allocation',
      desc: 'Automatically allocate your advertising budget to the campaigns that generate the highest return.',
    },
    {
      id: 3,
      icon: featuresIcon4,
      title: 'Automated A/B Testing',
      desc: 'Run automated A/B tests and let the system identify and scale the best-performing ads.',
    },
    {
      id: 4,
      icon: featuresIcon3,
      title: 'Creative Performance Insights',
      desc: 'AI analyzes your ad creatives to identify which visuals and messages deliver the best results.',
    },

    {
      id: 5,
      icon: featuresIcon5,
      title: 'Predictive ROAS Optimization',
      desc: 'Predict campaign performance in advance and optimize your strategy to maximize return on ad spend.',
    },
    {
      id: 6,
      icon: featuresIcon6,
      title: 'Cross-Platform Optimization',
      desc: 'Manage and optimize advertising campaigns across platforms like Google Ads, Meta Ads, and TikTok from one dashboard.',
    },
  ];

  return (
    <section id="features" className="mb-25 sm:mb-50">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-10 sm:mb-17">
        <h2 className="max-w-180 text-center lg:text-left text-3xl md:text-5xl/14 font-bold bg-linear-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          Powerful AI Tools for Smarter Advertising
        </h2>
        <p className="max-w-110 text-center lg:text-left mt-6 lg:mt-0">
          Our AI platform analyzes and optimizes your advertising campaigns to
          maximize performance and reduce wasted ad spend.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:px-0 px-10">
        {features.map((feature) => (
          <div key={feature.id} className="w-full h-auto ">
            <img src={feature.icon} alt={feature.title} className="max-h-10" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#F6F6F7] pt-4 pb-3">
              {feature.title}
            </h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
