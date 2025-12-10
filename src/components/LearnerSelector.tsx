import { useState } from "react";

const LearnerSelector = () => {
    const [selected, setSelected] = useState("1-400");

    const options = [
        { id: "1-400", label: "1-400 Learners" },
        { id: "401-800", label: "401-800 Learners" },
        { id: "801-1200", label: "801-1200 Learners" },
    ];

    return (
        <div className="flex flex-col my-5 px-4 xl:px-0">
            <div className="flex items-center gap-4">
                <p className="text-[#0E0C15] hidden lg:block">Learners: </p>
                <div className="inline-flex rounded-full bg-white border border-[#0E0C151A] overflow-x-auto">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setSelected(option.id)}
                            className={`
px-6 lg:py-4 lg:pt-5 py-2 rounded-full  transition-all duration-200 min-w-[167px]
${
    selected === option.id
        ? "bg-black font-semibold text-white shadow-sm"
        : "bg-transparent text-[#0E0C15] hover:text-gray-900"
}
`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearnerSelector;
