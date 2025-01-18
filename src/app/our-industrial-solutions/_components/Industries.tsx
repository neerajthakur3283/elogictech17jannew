'use client'
import Image from "next/image";
import { useState } from "react";

// images
import imgOne from '@/src/assets/images/food-industry.jpg'
import imgTwo from '@/src/assets/images/textile-industry.jpg'
import imgThree from '@/src/assets/images/plastic-industry.jpg'
import imgFour from '@/src/assets/images/utilities-industry.jpg'
import imgFive from '@/src/assets/images/pharma-industry.jpg'

const industries = [
  {
    id: 1,
    tabImg: imgOne,
    name: "Food Manufacturing / FMCG",
    details: [
      "Track energy use in blast freezers and cold rooms during door openings and defrosting.",
      "Monitor power quality in mixing and grinding equipment for maintenance and product quality.",
      "Analyze OEE on packaging lines to minimize changeover times and waste.",
      "Inspect bakery conveyor systems for belt misalignment to prevent contamination.",
      "Evaluate temperature-related energy use in ovens and fryers to optimize batch scheduling.",
    ],
  },
  {
    id: 2,
    tabImg: imgTwo,
    name: "Textiles & Paper",
    details: [
      "Track water usage in dyeing processes for sustainability.",
      "Monitor energy consumption in spinning and weaving machines.",
      "Optimize production schedules to minimize downtime.",
    ],
  },
  {
    id: 3,
    tabImg: imgThree,
    name: "Plastics and Metal Parts Manufacturing",
    details: [
      "Track energy use in blast freezers and cold rooms during door openings and defrosting.",
      "Monitor power quality in mixing and grinding equipment for maintenance and product quality.",
      "Analyze OEE on packaging lines to minimize changeover times and waste.",
      "Inspect bakery conveyor systems for belt misalignment to prevent contamination.",
      "Evaluate temperature-related energy use in ovens and fryers to optimize batch scheduling.",
    ],
  },
  {
    id: 4,
    tabImg: imgFour,
    name: "Utilities",
    details: [
      "Monitor grid stability with real-time energy tracking.",
      "Optimize load distribution for power plants and grids.",
      "Analyze energy demand patterns to improve efficiency.",
    ],
  },
  {
    id: 5,
    tabImg: imgFive,
    name: "Pharma/Chemical",
    details: [
      "Ensure compliance by monitoring critical equipment.",
      "Track temperature and pressure in chemical processes.",
      "Optimize batch processing to minimize energy use.",
    ],
  },
];

const IndustriesTabs = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
            <div className="flex items-start 2xl:gap-[100px] xl:gap-[75px] lg:gap-[66px] md:gap-[35px] lg:flex-nowrap flex-wrap">
                <div className="2xl:max-w-[742px] w-full">
                    <div className="md:mb-0 mb-8">
                        <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold 2xl:mb-4 xl:mb-3 mb-2.5">Industries</h2>
                        <p className="text-[#4B5563] lg:font-medium md:leading-snug leading-[1.65] 2xl:text-[24px] xl:text-[18px] text-base">
                            We can communicate with a wide range of OEM equipment, PLCs, HMIs, and sensors with rich
                            protocol integrations and deploy tailor-made applications on both edge and cloud.
                        </p>
                    </div>
                    <div className="lg:flex hidden flex-col 2xl:mt-[94.5px] xl:mt-[68.5px] lg:mt-[60px] md:mt-[45px] 2xl:gap-y-[9px] md:gap-y-[6px] gap-y-[5px]">
                        <div className="flex items-center justify-between 2xl:mb-3 md:mb-2 mb-1.5">
                            <span className="2xl:text-[16.59px] xl:text-[12.45px] text-[11.6px]  text-[#101010]">Select a Industry</span>
                            <span className="text-[#101010] 2xl:text-[15.05px] xl:text-[11.29px] text-[10.03px]">{`${activeTab.id} — ${industries.length}`}</span>
                        </div>
                        {industries.map((industry) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveTab(industry)}
                            className={`2xl:p-[10px] xl:p-[7.5px] p-[6.67px] text-left border 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] ${
                            activeTab.id === industry.id
                                ? "bg-[#E4E7FF] border-[#2F44FF] text-[#101010] font-semibold"
                                : "bg-gray-50 border-gray-300 text-[rgba(16,16,16,0.5)]"
                            } transition`}
                        >
                            <div className="flex items-center 2xl:gap-[18px] xl:gap-[13.5px] gap-[12px]">
                                <div className="2xl:rounded-[5px] xl:rounded-[3.75px] rounded-[3.33px] overflow-hidden 2xl:w-[70px] md:w-[52.5px] w-[46.67px]">
                                    <Image src={industry.tabImg} alt="" />
                                </div>
                                <span className="2xl:text-[16.73px] xl:text-[12.76px] text-[11.16px] ">
                                    {industry.name}
                                </span>
                            </div>
                        </button>
                        ))}
                    </div>
                </div>
                <div className="w-full min-[1536px]:min-w-[840px] min-[1720px]:min-w-[932px] min-[1280px]:min-w-[742px] min-[1024px]:min-w-[562px] relative after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-[rgba(0,0,0,0)] 2xl:after:h-[699px] after:h-full after:w-full after:2xl:rounded-[24px] after:xl:rounded-[18px] after:md:rounded-[16px] after:rounded-[18.45px]">
                    <div className="2xl:rounded-[24px] xl:rounded-[18px] md:rounded-[16px] rounded-[18.45px] overflow-hidden">
                        <Image src={activeTab.tabImg} alt="" />
                     </div>
                    <div className="absolute bottom-0 left-0 2xl:p-[40px] xl:p-[30px] md:p-[26px] p-[20px] z-[1]">
                        <h3 className="2xl:text-[43.48px] xl:text-[32.61px] md:text-[28.98px] text-[17.35px] text-white font-semibold">{activeTab.name}</h3>
                        <ul className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px] text-white 2xl:text-[24px] xl:text-[18px] md:text-base text-[9.58px] gap-2 flex flex-col">
                        {activeTab.details.map((detail, index) => (
                            <li className="font-normal leading-snug flex" key={index}>
                                <div className="flex justify-center 2xl:w-[40px] 2xl:pt-3 lg:pt-2 md:pt-2 pt-1 pe-2">
                                    <span className="rounded-full 2xl:w-[10px] xl:w-[8px] md:w-[6px] w-[3px] 2xl:h-[10px] xl:h-[8px] md:h-[6px] h-[3px] bg-white flex"></span>
                                </div>
                                <span className="w-[calc(100%_-_40px)]">{detail}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="lg:hidden flex flex-col 2xl:gap-y-[9px] md:gap-y-[6px] gap-y-[5px] w-full md:mt-0 mt-4">
                    <div className="flex items-center justify-between">
                        <span className="2xl:text-[16.59px] xl:text-[12.45px] text-[11.6px]  text-[#101010] 2xl:mb-3 md:mb-2 mb-1.5">Select a Industry</span>
                        <span className="text-[#101010] 2xl:text-[15.05px] xl:text-[11.29px] text-[10.03px]">{`${activeTab.id} — ${industries.length}`}</span>
                    </div>
                    {industries.map((industry) => (
                    <button
                        key={industry.id}
                        onClick={() => setActiveTab(industry)}
                        className={`2xl:p-[10px] xl:p-[7.5px] p-[6.67px] text-left border 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] ${
                        activeTab.id === industry.id
                            ? "bg-[#E4E7FF] border-[#2F44FF] text-[#101010] font-semibold"
                            : "bg-gray-50 border-gray-300 text-[rgba(16,16,16,0.5)]"
                        } transition`}
                    >
                        <div className="flex items-center 2xl:gap-[18px] xl:gap-[13.5px] gap-[12px]">
                            <div className="2xl:rounded-[5px] xl:rounded-[3.75px] rounded-[3.33px] overflow-hidden 2xl:w-[70px] md:w-[52.5px] w-[46.67px]">
                                <Image src={industry.tabImg} alt="" />
                            </div>
                            <span className="2xl:text-[16.73px] xl:text-[12.76px] text-[11.16px] ">
                                {industry.name}
                            </span>
                        </div>
                    </button>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default IndustriesTabs;
