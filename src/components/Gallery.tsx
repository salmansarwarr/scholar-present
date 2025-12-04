import { useState } from "react";

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleClick = (add: boolean) => {
        if (add) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 7 ? 1 : prevIndex + 1
            );
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 1 ? 7 : prevIndex - 1
            );
        }
    };

    const getBottomTitle = (i?: number) => {
        switch (i || currentIndex) {
            case 1:
                return "Parents always connected";
            case 2:
                return "Clear school calendar";
            case 3:
                return "Real-time finances";
            case 4:
                return "Instant attendance alerts";
            case 5:
                return "Documents at your fingertips";
            case 6:
                return "More time for learners";
            case 7:
                return "Clarity & Control";
            default:
                return "Parents always connected";
        }
    };

    const getBottomDesc = (i?: number) => {
        switch (i || currentIndex) {
            case 1:
                return "Messages reach the right people at the right time.";
            case 2:
                return "no clashes, no missed deadlines, everyone stays updated.";
            case 3:
                return "every receipt, every requisition, every report, always accurate and audit-ready.";
            case 4:
                return "parents know immediately if their child misses school.";
            case 5:
                return "secure, digital, and shared.";
            case 6:
                return "because admin shouldn’t steal your day.";
            case 7:
                return "Over your school's operations";
            default:
                return "Messages reach the right people at the right time.";
        }
    };

    return (
        <div className="w-full mx-auto px-6 pb-10 lg:px-16 lg:py-22 lg:bg-[#f6f6f6]">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8 md:mb-10">
                <h1 className="text-3xl md:text-5xl font-semibold">
                    Imagine Finally Having
                </h1>

                <div className="xl:flex gap-3 hidden">
                    <button
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="Previous"
                        onClick={() => handleClick(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M15 18L9 12L15 6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="Next"
                        onClick={() => handleClick(true)}
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M9 18L15 12L9 6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="hidden xl:flex gap-4 transition-all">
                <img
                    src={`/gallery/${currentIndex}.png`}
                    alt="Family looking at laptop together"
                    className="max-w-[620px] max-h-[500px] object-cover"
                />
                <div className="flex flex-col justify-between pb-4">
                    <div className="flex gap-4">
                        <img
                            src={`/gallery/${
                                currentIndex == 7 ? 1 : currentIndex + 1
                            }.png`}
                            alt="Teacher in yellow outfit engaging with students in classroom"
                            className="w-[300px] object-cover"
                        />
                        <img
                            src={`/gallery/${
                                currentIndex == 7
                                    ? 2
                                    : currentIndex == 6
                                    ? 1
                                    : currentIndex + 2
                            }.png`}
                            alt="Teacher in yellow outfit engaging with students in classroom"
                            className="w-[300px] object-cover"
                        />
                    </div>
                    <div className="pl-2">
                        <h2 className="text-2xl font-bold mb-2">
                            {getBottomTitle()}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            {getBottomDesc()}
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:hidden overflow-x-auto">
                <div className="flex gap-6 ">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="min-w-[250px] max-w-[265px] shrink-0">
                            <img
                                src={`/gallery/${i}.png`}
                                alt="Family looking at laptop together"
                                className="w-auto h-auto max-w-[265px] object-cover mb-4"
                            />
                            <div>
                                <h2 className="text-xl font-bold mb-1">
                                    {getBottomTitle(i)}
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {getBottomDesc(i)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
