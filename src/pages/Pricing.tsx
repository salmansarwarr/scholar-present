import { useState } from "react";
import LearnerSelector from "../components/LearnerSelector";
import BillingToggle from "../components/BillingToggle";
import PricingCard from "../components/PricingCard";
import PricingTierCard from "../components/PricingTierCard";
import HowItWorksSection from "../components/HowItWorks";
import PricingFAQs from "../components/PricingFaqs";

const pricingTiers = [
    {
        title: "Essential",
        subtitle: "Start simple. Communicate clearly.",
        description: "Small schools going digital for the first time",
        price: "4,500.00",
        currency: "R",
        period: "yr",
        perLearnerCost: "0.94 per learner / month (at band max)",
        badges: ["24 hour SLA", "7,000 SMS / year included"],
        features: [
            "Communication",
            "COre onboarding",
            "Parent + staff directories",
            "Secure sign-in (OTP)",
            "Basic analytics",
        ],
        addOnsDescription:
            "Extra SMS at standard rate Add Calendar/Attendance/Documents",
        onboarding: "R 625.00 one-time",
        training: "R 1,250.00 one-time",
        buttonText: "Start With Essentials",
        onButtonClick: () => {},
    },
    {
        title: "Essential",
        subtitle: "Start simple. Communicate clearly.",
        description: "Small schools going digital for the first time",
        price: "4,500.00",
        currency: "R",
        period: "yr",
        perLearnerCost: "0.94 per learner / month (at band max)",
        badges: ["24 hour SLA", "7,000 SMS / year included"],
        features: [
            "Communication",
            "COre onboarding",
            "Parent + staff directories",
            "Secure sign-in (OTP)",
            "Basic analytics",
        ],
        addOnsDescription:
            "Extra SMS at standard rate Add Calendar/Attendance/Documents",
        onboarding: "R 625.00 one-time",
        training: "R 1,250.00 one-time",
        buttonText: "Start With Essentials",
        onButtonClick: () => {},
    },
    {
        title: "Essential",
        subtitle: "Start simple. Communicate clearly.",
        description: "Small schools going digital for the first time",
        price: "4,500.00",
        currency: "R",
        period: "yr",
        perLearnerCost: "0.94 per learner / month (at band max)",
        badges: ["24 hour SLA", "7,000 SMS / year included"],
        features: [
            "Communication",
            "COre onboarding",
            "Parent + staff directories",
            "Secure sign-in (OTP)",
            "Basic analytics",
        ],
        addOnsDescription:
            "Extra SMS at standard rate Add Calendar/Attendance/Documents",
        onboarding: "R 625.00 one-time",
        training: "R 1,250.00 one-time",
        buttonText: "Start With Essentials",
        onButtonClick: () => {},
    },
    {
        title: "Essential",
        subtitle: "Start simple. Communicate clearly.",
        description: "Small schools going digital for the first time",
        price: "4,500.00",
        currency: "R",
        period: "yr",
        perLearnerCost: "0.94 per learner / month (at band max)",
        badges: ["24 hour SLA", "7,000 SMS / year included"],
        features: [
            "Communication",
            "COre onboarding",
            "Parent + staff directories",
            "Secure sign-in (OTP)",
            "Basic analytics",
        ],
        addOnsDescription:
            "Extra SMS at standard rate Add Calendar/Attendance/Documents",
        onboarding: "R 625.00 one-time",
        training: "R 1,250.00 one-time",
        buttonText: "Start With Essentials",
        onButtonClick: () => {},
    },
];

const faqData = [
    {
        question: "Is annual cheaper?",
        answer: "Annual payout be monthly by default. You can enable a promotional annual discount to lure when running campaigns.",
    },
    {
        question: "What happens if our learner count changes?",
        answer: "You can update bands as prices. We'll pro-rate the difference today.",
    },
    {
        question: "How do SMS costs work beyond the allowance?",
        answer: "Send prices include no annual limit standalone. Additional messages cost better at the standard per-SMS rate.",
    },
    {
        question: "Can we add or remove modules later?",
        answer: "Yes. ScholarPresent is modular - add Calendar, Attendance, Documents, Forms, and Insights as you need them.",
    },
];

const Pricing = () => {
    const [isAnnually, setIsAnnually] = useState(false);

    return (
        <div className="bg-[#f6f6f6] pt-10 lg:pt-16 flex flex-col">
            <div className="px-4 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-gray-600 lg:text-base leading-relaxed lg:max-w-[700px]">
                    Choose a plan that fits your learner count today. Start
                    small and add modules as you grow.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5 p-4 lg:py-8 lg:max-w-[700px] lg:justify-center mx-auto w-full">
                <button className="bg-[#2D9E53] w-full text-center justify-center cursor-pointer h-12 md:h-14 box-border text-white px-6 rounded-full hover:bg-green-700 transition-colors font-medium inline-flex items-center gap-2">
                    Purchase a bundle
                </button>
                <button className="bg-[#2D9E53]/10 w-full border border-[#2D9E53] box-border h-12 md:h-14 text-center justify-center cursor-pointer text-gray-900 px-6 rounded-full hover:bg-green-700/10 transition-colors font-medium inline-flex items-center gap-2">
                    Purchase a bundle
                </button>
            </div>
            <div className="flex flex-col md:items-center xl:flex-row xl:justify-between xl:px-20 xl:mt-6">
                <LearnerSelector />
                <BillingToggle value={isAnnually} onChange={setIsAnnually} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-center p-4 gap-4 mx-auto xl:px-20 mb-2 xl:mb-20">
                {pricingTiers.map((pricingTier, index) => (
                    <PricingCard
                        key={index}
                        {...pricingTier}
                        {...(index === 1 ? { isBordered: true } : {})}
                    />
                ))}
            </div>
            <div className="hidden px-4 text-center lg:flex flex-col items-center">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-gray-600 lg:text-base leading-relaxed lg:max-w-[700px]">
                    Choose a plan that fits your learner count today. Start
                    small and add modules as you grow.
                </p>
            </div>
            <div className="hidden lg:flex flex-col lg:flex-row items-center gap-2 lg:gap-5 p-4 lg:py-8 lg:max-w-[700px] lg:justify-center mx-auto w-full">
                <button className="bg-[#2D9E53] w-full text-center justify-center cursor-pointer h-12 md:h-14 box-border text-white px-6 rounded-full hover:bg-green-700 transition-colors font-medium inline-flex items-center gap-2">
                    Purchase a bundle
                </button>
                <button className="bg-[#2D9E53]/10 w-full border border-[#2D9E53] box-border h-12 md:h-14 text-center justify-center cursor-pointer text-gray-900 px-6 rounded-full hover:bg-green-700/10 transition-colors font-medium inline-flex items-center gap-2">
                    Purchase a bundle
                </button>
            </div>
            <div className="hidden lg:flex justify-center gap-4 text-black text-[16px] capitalize">
                <p className="px-8 py-2 bg-white border border-[#E4E4E4] rounded-lg">
                    AI tools
                </p>
                <p className="px-8 py-2 bg-white border border-[#0066BF] rounded-lg">
                    Attendance
                </p>
                <p className="px-8 py-2 bg-white border border-[#E4E4E4] rounded-lg">
                    Calendar
                </p>
                <p className="px-8 py-2 bg-white border border-[#E4E4E4] rounded-lg">
                    Communication
                </p>
                <p className="px-8 py-2 bg-white border border-[#E4E4E4] rounded-lg">
                    Documents
                </p>
                <p className="px-8 py-2 bg-white border border-[#E4E4E4] rounded-lg">
                    Finance
                </p>
                <p className="px-8 py-2 bg-white border border-[#E4E4E4] rounded-lg">
                    Grading
                </p>
            </div>
            <div className="flex flex-col items-center py-4 gap-4 lg:flex-row-reverse justify-center lg:px-10">
                <PricingTierCard />
                <HowItWorksSection />
            </div>
            <PricingFAQs faqs={faqData} onGetStarted={() => {}} />
        </div>
    );
};

export default Pricing;
