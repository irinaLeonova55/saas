function Faq() {
  const questions = [
    {
      id: 1,
      question: 'How does AI optimize advertising campaigns?',
      answear:
        'Our AI analyzes campaign performance data, identifies inefficiencies, and provides recommendations to improve targeting, creatives, and budget allocation.',
    },
    {
      id: 2,
      question: 'Which advertising platforms are supported?',
      answear:
        'The platform works with major advertising networks including Google Ads, Meta Ads, and TikTok Ads.',
    },
    {
      id: 3,
      question: 'How quickly can I see results?',
      answear:
        'Most users start seeing optimization opportunities within the first few days after connecting their advertising accounts.',
    },
    {
      id: 4,
      question: 'Do I need technical or AI knowledge to use the platform?',
      answear:
        'No, the platform is designed for marketers and business owners with a simple dashboard and clear AI-driven recommendations.',
    },
    {
      id: 5,
      question: 'Can I manage multiple campaigns or clients?',
      answear:
        'Yes, higher-tier plans allow you to manage multiple campaigns and accounts from a single dashboard.',
    },
  ];

  return (
    <section id="faq" className="w-full mt-25 sm:mt-50">
      <h2 className="max-w-160 mx-auto mb-10 sm:mb-17 text-center text-3xl md:text-5xl/14 font-bold text-[#F6F6F7]">
        Frequently Asked Questions
      </h2>

      {questions.map((question) => (
        <details
          key={question.id}
          className="group max-w-200 mx-auto border-b border-[#8f9bb7] last:border-none py-4"
        >
          <summary className="flex gap-2 w-full justify-between cursor-pointer list-none text-left text-xl md:text-2xl font-semibold text-[#F6F6F7]">
            {question.question}
            <span className="transition group-open:rotate-45 h-6">
              <svg
                xmlns="http://www.w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </summary>
          <div className="pt-4 pr-10 text-left">{question.answear}</div>
        </details>
      ))}
    </section>
  );
}

export default Faq;
