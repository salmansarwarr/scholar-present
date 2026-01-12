import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const TestimonialCard = () => {
    const [currTestimonialNo, setCurrTestimonialNo] = useState(1);

    const handleNextTestimonial = (direction: string, no?: number) => {
        if (no) {
            setCurrTestimonialNo(no);
            return;
        }

        if (direction === "left") {
            setCurrTestimonialNo((prev) => (prev === 1 ? 3 : prev - 1));
            return;
        }
        setCurrTestimonialNo((prev) => (prev === 3 ? 1 : prev + 1));
    };

    return (
        <div className="mx-auto mt-6 bg-[#f6f6f6] py-5 lg:py-14 px-4 lg:pr-0 lg:pl-14 xl:pl-22 rounded-3xl overflow-hidden shadow-lg">
            <div className="lg:flex flex-row-reverse gap-8 lg:mb-8">
                <img
                    src="/testimonial.png"
                    alt="Happy family"
                    className="w-full h-auto object-cover rounded-3xl lg:rounded-l-xl lg:rounded-r-none"
                />

                <div className="pt-6">
                    <img
                        src="/schools/school1.png"
                        alt="Happy family"
                        className="w-21.75 md:w-auto h-auto object-cover mb-4"
                    />

                    <p className="text-[#65676C] text-left md:text-[20px] mb-8 leading-relaxed">
                        They saved us over R200,000 in printing and SMS costs in
                        our first year, but more importantly, it gave us
                        confidence in our communication and safety.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between lg:pr-14">
                <div className="flex lg:hidden items-center gap-3">
                    <img
                        src={`/avatar/${currTestimonialNo}.png`}
                        alt="Mara Hilpert"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">
                            {currTestimonialNo == 1 ? "Mara Hilpert" : currTestimonialNo == 2 ? "Emily Carter" : currTestimonialNo == 3 ? "Sophia Williams" : "Daniel Brown"}
                        </p>
                        <p className="text-[#777E90] text-sm">
                            {currTestimonialNo == 1 ? "Scholars Path School" : currTestimonialNo == 2 ? "Excellence Grammar School" : currTestimonialNo == 3 ? "Bright Future Academy" :     "Bright Future Academy"}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => handleNextTestimonial("_", 1)}
                    className={`hidden lg:flex xl:w-full xl:mr-8 items-center gap-3 ${
                        currTestimonialNo == 1 && "border-b"
                    } pb-5`}
                >
                    <img
                        src={`/avatar/1.png`}
                        alt="Mara Hilpert"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">
                            Emily Carter
                        </p>
                        <p className="text-[#777E90] text-sm">
                            Scholars Path School
                        </p>
                    </div>
                </button>
                <button
                    onClick={() => handleNextTestimonial("_", 2)}
                    className={`hidden lg:flex xl:w-full xl:mr-8 items-center gap-3 ${
                        currTestimonialNo == 2 && "border-b"
                    } pb-5`}
                >
                    <img
                        src={`/avatar/2.png`}
                        alt="Mara Hilpert"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">
                            Sophia Williams
                        </p>
                        <p className="text-[#777E90] text-sm">
                            Excellence Grammar School
                        </p>
                    </div>
                </button>
                <button
                    onClick={() => handleNextTestimonial("_", 3)}
                    className={`hidden lg:flex xl:w-full xl:mr-8 items-center gap-3 ${
                        currTestimonialNo == 3 && "border-b"
                    } pb-5`}
                >
                    <img
                        src={`/avatar/3.png`}
                        alt="Mara Hilpert"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">
                            Daniel Brown
                        </p>
                        <p className="text-[#777E90] text-sm">
                            School Name Here
                        </p>
                    </div>
                </button>
                <button
                    onClick={() => handleNextTestimonial("_", 4)}
                    className={`hidden lg:flex xl:w-full xl:mr-8 items-center gap-3 ${
                        currTestimonialNo == 4 && "border-b"
                    } pb-5`}
                >
                    <img
                        src={`/avatar/4.png`}
                        alt="Mara Hilpert"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">
                            Mara Hilpert
                        </p>
                        <p className="text-[#777E90] text-sm">
                            School Name Here
                        </p>
                    </div>
                </button>

                <div className="flex gap-2 lg:hidden">
                    <button
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                        onClick={() => handleNextTestimonial("left")}
                    >
                        <ArrowLeft className="text-gray-900" />
                    </button>
                    <button
                        className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                        aria-label="Next testimonial"
                        onClick={() => handleNextTestimonial("right")}
                    >
                        <ArrowRight className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
