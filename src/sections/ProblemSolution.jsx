import problemIcon1 from '../assets/icons/problem-1.svg';
import bgCard1 from '../assets/images/bg-card-1.png';
import problemIcon2 from '../assets/icons/problem-2.svg';
import bgCard2 from '../assets/images/bg-card-2.png';
import problemIcon3 from '../assets/icons/problem-3.svg';
import bgCard3 from '../assets/images/bg-card-3.png';

function ProblemSolution() {
  const problems = [
    {
      id: 1,
      icon: problemIcon1,
      title: 'Find Wasted Ad Spend',
      desc: 'Quickly identify campaigns that are draining your budget without delivering results.',
      bg: bgCard1,
    },
    {
      id: 2,
      icon: problemIcon2,
      title: 'Discover Growth Opportunities',
      desc: 'AI highlights the audiences, creatives, and channels that generate the highest return.',
      bg: bgCard2,
    },
    {
      id: 3,
      icon: problemIcon3,
      title: 'Optimize Campaigns Automatically',
      desc: 'Turn insights into action with automated recommendations that improve performance.',
      bg: bgCard3,
    },
  ];

  return (
    <section className="mb-25 sm:mb-50">
      <h2 className="max-w-160 mx-auto mb-6 text-center text-3xl md:text-5xl/14 font-bold bg-linear-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
        Smarter Advertising Starts with Data and AI
      </h2>
      <p className="max-w-180 mx-auto text-center mb-10 sm:mb-17">
        Our platform analyzes advertising performance in real time and helps you
        identify the fastest way to improve results and scale profitable
        campaigns.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-55">
        {problems.map((problem) => (
          <div key={problem.id} className="relative w-full">
            <div className="relative mx-auto w-[calc(100%-50px)] mb-6 z-2 min-h-50 bg-[#0E1330] border border-[#282D45] p-6 rounded-xl">
              <div className="flex gap-3 items-center pb-3 min-h-20">
                <img
                  src={problem.icon}
                  alt="Problem icon"
                  className="max-h-10"
                />
                <h3 className="text-xl font-semibold text-[#F6F6F7]">
                  {problem.title}
                </h3>
              </div>
              <p>{problem.desc}</p>
            </div>
            <div
              className="absolute bottom-0 left-0 w-full h-28 z-1 bg-cover bg-center rounded-xl border border-[#282D45]"
              style={{ backgroundImage: `url(${problem.bg})` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProblemSolution;
