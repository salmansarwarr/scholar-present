import { CheckIcon } from "lucide-react";
import BlueBtn from "./BlueBtn";
import SeeHowItWorksModal from "./SeeHowItWorksModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SolutionCardProps {
    img: string;
    module: string;
    title: string;
    problem: string;
    solutionDesc: string;
    solutionPoints: string[];
    benefitPoints: string[];
}

const SolutionCard = ({
    img,
    module,
    title,
    problem,
    solutionDesc,
    solutionPoints,
    benefitPoints,
}: SolutionCardProps) => {
    const [openModdal, setOpenModdal] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
  <SeeHowItWorksModal isOpen={openModdal} onClose={() => setOpenModdal(false)} />
        <div className="max-w-6xl py-5 md:py-8 mx-auto  rounded-2xl overflow-hidden">
            <div className=" text-emerald-500 uppercase text-center font-semibold px-3 py-1 rounded mb-2">
                {module}
            </div>
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight text-center mb-10 px-4">
                {title}
            </h1>

            <div className="grid md:gap-4 md:grid-cols-[40%_60%]">
                <div className="shadow-lg ">
                    <img
                        src={img}
                        alt="Family using tablet together"
                        className="md:rounded-lg w-full h-full object-cover transform scale-x-[-1]"
                    />
                </div>

                <div className=" flex flex-col justify-center space-y-6 p-4 bg-white md:rounded-lg md:p-8 md:shadow-lg">
                    <div className="space-y-3">
                        <h2 className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                            PROBLEM
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {problem}
                        </p>
                    </div>

                    <div className="space-y-3 border-t border-gray-200 pt-6">
                        <h2 className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                            SOLUTION
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {solutionDesc}
                        </p>
                        <ul className="space-y-2">
                            {solutionPoints.map((point, index) => (
                                <li className="flex items-start" key={index}>
                                    <div className="w-4 h-4 rounded-full p-0.5 bg-emerald-300 flex items-center justify-center mt-1.5 mr-2 shrink-0">
                                        <CheckIcon className="text-emerald-600 font-bold" />
                                    </div>

                                    <span className="text-gray-700 text-sm">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3 border-t border-gray-200 pt-6">
                        <h2 className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                            BENEFITS
                        </h2>
                        <ul className="space-y-2">
                            {benefitPoints.map((point, index) => (
                                <li className="flex items-start" key={index}>
                                    <div className="w-4 h-4 rounded-full p-0.5 bg-emerald-300 flex items-center justify-center mt-1.5 mr-2 shrink-0">
                                        <CheckIcon className="text-emerald-600 font-bold" />
                                    </div>
                                    <span className="text-gray-700 text-sm">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <BlueBtn handleClick={() => setOpenModdal(true)}>Book a Demo</BlueBtn>
                        <button
                        onClick={() => navigate("/pricing")}
                            className={`border border-[#0066BF] text-center justify-center cursor-pointer max-h-16 text-[#0066BF] px-8 py-3 rounded-full transition-colors font-medium inline-flex items-center gap-2`}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SolutionCard;
