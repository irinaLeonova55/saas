import { useState } from 'react';
import Button from '../components/Button';

function Calculator() {
  const [budget, setBudget] = useState(20000);
  const [clicks, setClicks] = useState(3);
  const [conversion, setConversion] = useState(2);

  const metrics = [
    {
      id: 1,
      title: 'Monthly Ad Spend',
      sign: '$',
      value: budget,
      onChange: setBudget,
      min: 1000,
      max: 100000,
      step: 1000,
    },
    {
      id: 2,
      title: 'Average Cost Per Click (CPC)',
      sign: '$',
      value: clicks,
      onChange: setClicks,
      min: 0.5,
      max: 20,
      step: 0.5,
    },

    {
      id: 3,
      title: 'Website Conversion Rate',
      sign: '%',
      value: conversion,
      onChange: setConversion,
      min: 0.5,
      max: 10,
      step: 0.1,
    },
  ];

  const leads =
    clicks === 0 ? 0 : Math.round((budget / clicks) * (conversion / 100));

  const cpcImprovement = Math.min(0.25, clicks * 0.03);
  const crImprovement = Math.min(0.35, conversion * 0.05);
  const newClicks = clicks * (1 - cpcImprovement);
  const newConversion = conversion * (1 + crImprovement);
  const newLeads = Math.round((budget / newClicks) * (newConversion / 100));
  const grow = leads === 0 ? 0 : Math.round(((newLeads - leads) / leads) * 100);

  //проценты для заполнения прямоугольников
  const maxLeads = Math.max(leads, newLeads) * 1.2;
  const beforePercent = (leads / maxLeads) * 100;
  const afterPercent = (newLeads / maxLeads) * 100;

  return (
    <section id="calculator" className="w-full mb-25 sm:mb-50">
      <div className="flex flex-col items-center mx-0 mb-10 sm:mb-17 w-full">
        <h2 className="max-w-160 mx-auto mb-1 text-center text-3xl md:text-5xl/14 font-bold bg-linear-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          Estimate the Leads You're Missing
        </h2>
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 w-full h-auto rounded-xl mx-auto p-5 sm:p-10 md:p-24 border border-[#282D45] rounded-r-xl  overflow-hidden">
        <div className="absolute z-5 w-46 h-58 -bottom-10 -left-5 bg-[#7214FF] rounded-full blur-[170px]" />
        <div className="bg-[#060B27] z-1  rounded-l-xl">
          <h2 className="mb-4 text-left text-3xl font-bold text-white">
            Enter your ad metrics
          </h2>
          <p className="">
            To estimate how many additional leads AI-driven optimization could
            generate each month.
          </p>

          {metrics.map((metric) => (
            <div key={metric.id} className="z-20 my-10 last:mb-0">
              <div className="flex justify-between gap-2">
                <span className="text-lg md:text-xl font-bold text-left">
                  {metric.title}
                </span>
                <div className="flex gap-2">
                  <span className="text-white">{metric.sign}</span>
                  <input
                    type="number"
                    value={metric.value}
                    onChange={(e) => metric.onChange(Number(e.target.value))}
                    className="w-20 h-8 rounded-lg bg-[#060B27] border border-[#8f9bb7] text-white text-center"
                  />
                </div>
              </div>

              <input
                type="range"
                min={metric.min}
                max={metric.max}
                step={metric.step}
                value={metric.value}
                onChange={(e) => metric.onChange(Number(e.target.value))}
                className="w-full mt-4 h-2 bg-[#8f9bb7] rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7214FF] [&::-webkit-slider-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #7214FF ${((metric.value - metric.min) / (metric.max - metric.min)) * 100}%, #8f9bb7 ${((metric.value - metric.min) / (metric.max - metric.min)) * 100}%)`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center z-1 bg-[#060B27]">
          <div className="flex flex-col justify-center items-center z-20">
            <p className="text-center">
              AI reduces CPC and improves conversion rate
            </p>
            <div className="text-center text-2xl font-bold text-white mb-6 mt-2">
              +{grow}% more leads
            </div>
            <div className="grid grid-cols-2 gap-5 w-56 mb-5">
              <div>
                <div className="relative h-40 bg-[#0E1330] rounded-xl overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full rounded-xl transition-all duration-700 ease-out bg-[#32CAFD]/50"
                    style={{ height: `${beforePercent}%` }}
                  ></div>
                </div>
                <div className="text-center text-white mt-2">
                  Before <br />
                  {leads} leads
                </div>
              </div>
              <div className="">
                <div className="relative h-40 bg-[#0E1330] rounded-xl overflow-hidden z-20">
                  <div
                    className="absolute bottom-0 w-full rounded-xl transition-all duration-700 ease-out bg-[#32CAFD]/50"
                    style={{ height: `${afterPercent}%` }}
                  ></div>
                </div>

                <div className="text-center text-white mt-2">
                  With AI
                  <br />
                  {newLeads} leads
                </div>
              </div>
            </div>
            <Button
              btnText="Request demo"
              variant="purple"
              extraStyle="w-80 mt-2"
              href="#pricing"
            />
          </div>
        </div>
        <div className="absolute z-5 w-50 h-65 -top-10 -right-10 bg-[#32CAFD] rounded-full blur-[200px]" />
      </div>
    </section>
  );
}

export default Calculator;
