import BlueBtn from "./BlueBtn";
import { DatabaseIcon, RocketIcon } from "lucide-react";
import SeeHowItWorksModal from "./SeeHowItWorksModal";
import { useState } from "react";

const GettingStarted = () => {
    const [showModal, setShowModal] = useState(false);
    
    const steps = [
        {
            number: 1,
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
            title: "Book a Free Demo",
            description: "See how ScholarPresent works for your school.",
        },
        {
            number: 2,
            icon: <DatabaseIcon className="w-5 h-5" />,
            title: "Choose the Modules You Need",
            description:
                "Start small or big — communication, attendance, finance, and more.",
        },
        {
            number: 3,
            icon: <RocketIcon className="w-5 h-5" />,
            title: "Launch & Thrive",
            description: "Reduce admin, engage parents, and focus on learners.",
        },
    ];

    return (
        <>
        <SeeHowItWorksModal isOpen={showModal} onClose={() => setShowModal(false)}/>
        <section className="py-16 lg:py-24 from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 justify-center items-center lg:items-stretch">
                    {/* Left Side - Text and Button */}
                    <div className="flex flex-col justify-center min-w-[280px] lg:min-w-[370px] text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
                            Getting Started
                            <br />
                            is Simple
                        </h2>
                        <div className="lg:inline-flex hidden justify-center lg:justify-start">
                            <BlueBtn handleClick={() => setShowModal(true)}>Get Started</BlueBtn>
                        </div>
                    </div>

                    {/* Center Side - Image */}
                    <div className="relative hidden rounded-3xl xl:flex items-center overflow-hidden max-w-md lg:max-w-none">
                        <img
                            src="/teacher2.png"
                            alt="Teacher holding books"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Side - Steps List */}
                    <div className="space-y-4 flex flex-col justify-center max-w-[485px] w-full">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="group relative border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="flex items-start gap-5">
                                    {/* Step Icon Badge */}
                                    <div className="shrink-0 w-13 h-13 bg-linear-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center text-green-600 shadow-md">
                                        {step.icon}
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 pt-1">
                                        <p className="text-sm lg:text-base font-bold tracking-wider text-green-600 mb-1 uppercase">
                                            Step {step.number}
                                        </p>
                                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-base lg:text-sm text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <BlueBtn handleClick={() => setShowModal(true)} classNames="w-full lg:hidden">Get Started</BlueBtn>
                </div>
            </div>
        </section>
        </>
    );
};

export default GettingStarted;
