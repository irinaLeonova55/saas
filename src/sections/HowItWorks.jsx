import Button from '../components/Button';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      selfStyle: 'self-start',
      title: 'Connect Your Ad Accounts',
      desc: 'Securely connect your advertising platforms such as Google Ads, Meta Ads, or TikTok Ads to start analyzing campaign data.',
    },
    {
      id: 2,
      selfStyle: 'self-end',
      title: 'AI Analyzes Your Campaigns',
      desc: 'Our AI processes performance data to identify inefficient spending, hidden opportunities, and growth potential.',
    },
    {
      id: 3,
      selfStyle: 'self-start',
      title: 'Optimize and Scale',
      desc: 'Apply AI-driven recommendations to improve performance and scale the campaigns that deliver the best results.',
    },
  ];

  return (
    <section
      id="steps"
      className="relative flex  flex-col lg:flex-row justify-between gap-16 lg:gap-30 w-full h-auto mt-25 sm:mt-50"
    >
      <div className="absolute z-20 w-40 h-40 top-20 left-0 bg-[#7214FF] rounded-full blur-[180px]" />
      <div className="flex items-center w-full sm:max-w-114">
        <div>
          <h2 className="max-w-180 mb-4 text-3xl md:text-5xl/14 font-bold text-[#F6F6F7]">
            How It Works
          </h2>
          <p>
            Get actionable insights and start optimizing your advertising
            campaigns with AI in just a few simple steps.
          </p>
          <Button
            btnText="View pricing"
            variant="transparent"
            href="#pricing"
            extraStyle="w-full sm:w-50 mt-10 hidden sm:flex"
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-10 w-full z-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${step.selfStyle} sm:w-111 w-full border border-[#233256] rounded-xl p-3`}
          >
            <div className="flex justify-start gap-5 items-start bg-[#060B27] p-6 rounded-xl">
              <div className="flex items-center text-7xl font-semibold text-[#7214FF]">
                <div className="block">{step.id}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F6F6F7] mb-2">
                  {step.title}
                </h3>
                <p>{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        btnText="View pricing"
        variant="transparent"
        href="#pricing"
        extraStyle="w-full sm:w-50 flex sm:hidden"
      />
      <div className="absolute z-5 w-20 h-20 bottom-20 right-20 bg-[#32CAFD] rounded-full blur-[190px]" />
    </section>
  );
}

export default HowItWorks;
