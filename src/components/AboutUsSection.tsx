import { useState } from "react";
import AboutUsSectionCard from "./AboutUsSectionCard";

const AboutUsSection = ({cardNo, lgHidden}: {cardNo?: number, lgHidden?: boolean}) => {
    const [active, setActive] = useState(cardNo || 1);

    const tabs = [
        { id: 1, label: "The Problem We See" },
        { id: 2, label: "Our Belief & Our Mission" },
        { id: 3, label: "How We Do It" },
    ];

    return (
        <div className={`${lgHidden ? "lg:hidden" : "flex"} w-full max-w-full flex-col items-center lg:flex-row lg:gap-12 xl:gap-44 lg:justify-between py-4 lg:py-10 lg:px-8 lg:max-w-7xl`}>
            <ul className="lg:hidden w-full max-w-full scrollbar-hide overflow-x-auto lg:overflow-visible space-y-1 flex lg:flex-col space-x-4 lg:space-x-0">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`
                            ml-5 mb-0 whitespace-nowrap lg:ml-0 text-xl py-3 lg:py-4
                            transition-colors cursor-pointer lg:border-b lg:border-gray-300
                            ${
                                active === tab.id
                                    ? "border-b-2 border-emerald-400 text-gray-900 font-bold"
                                    : "text-gray-600"
                            }
                        `}
                    >
                        <span
                            className={`font-normal lg:font-semibold mr-4 lg:text-[15px] xl:text-base
                                ${
                                    active === tab.id
                                        ? "text-emerald-500"
                                        : "text-gray-500"
                                }
                            `}
                        >
                            {String(tab.id).padStart(2, "0")}
                        </span>
                        {tab.label}
                    </li>
                ))}
            </ul>

            <ul className="hidden w-full max-w-full scrollbar-hide overflow-x-auto lg:overflow-visible space-y-1 lg:flex lg:flex-col space-x-4 lg:space-x-0">
    {tabs.map((tab) => (
        <a
            key={tab.id}
            href={`#section-${tab.id}`}  // Changed from #card-${tab.id}
            className={`
                ml-5 mb-0 whitespace-nowrap lg:ml-0 text-xl py-3 lg:py-4
                transition-colors cursor-pointer lg:border-b lg:border-gray-300
                ${
                    cardNo === tab.id  // Changed from active === tab.id
                        ? "border-b-2 border-emerald-400 text-gray-900 font-bold"
                        : "text-gray-600"
                }
            `}
        >
            <span
                className={`font-normal lg:font-semibold mr-4 lg:text-[15px] xl:text-base
                    ${
                        cardNo === tab.id  // Changed from active === tab.id
                            ? "text-emerald-500"
                            : "text-gray-500"
                    }
                `}
            >
                {String(tab.id).padStart(2, "0")}
            </span>
            {tab.label}
        </a>
    ))}
</ul>

            <AboutUsSectionCard cardNo={active} />
        </div>
    );
};

export default AboutUsSection;
