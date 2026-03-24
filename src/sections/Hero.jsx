import Button from '../components/Button';
import heroMockup from '../assets/images/hero-mockup.webp';

function Hero() {
  return (
    <section className="flex flex-col pt-12 items-center text-center">
      <h1 className="text-4xl md:text-6xl/16 font-bold  text-[#F6F6F7]">
        Increase ROAS by up to 35%
      </h1>
      <p className="inline-block text-center py-7 max-w-200">
        Analyze, optimize, and scale your advertising campaigns automatically.
        Our AI finds wasted budget, improves targeting, and maximizes your
        return on ad spend.
      </p>
      <div className="flex gap-4 sm:gap-7 flex-col justify-center sm:flex-row w-full">
        <Button btnText="Request demo" variant="purple" href="#pricing" />
        <Button
          btnText="See potential"
          variant="transparent"
          href="#calculator"
        />
      </div>
      <img
        src={heroMockup}
        alt="OptiAds Service Mockup"
        className="mt-12 w-full max-w-200 mx-auto transform scale-[1.02] shadow-xl rounded-2xl "
        fetchPriority="high"
      />
    </section>
  );
}

export default Hero;
