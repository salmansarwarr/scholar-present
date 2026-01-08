import { useState, useRef } from "react";
import BlueBtn from "./BlueBtn";
import SeeHowItWorksModal from "./SeeHowItWorksModal";

const HeroHome = ({
    heroImg,
    heroTxt,
}: {
    heroImg: string;
    heroTxt: string;
}) => {
    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Dummy slides data - replace with your actual data
    const slides = [
        {
            img: heroImg,
            text: heroTxt,
        },
        {
            img: heroImg,
            text: heroTxt,
        },
        {
            img: heroImg,
            text: heroTxt,
        },
    ];

    const totalSlides = slides.length;

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Touch/Mouse events
    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartPos(clientX);
        if (sliderRef.current) {
            sliderRef.current.style.cursor = "grabbing";
        }
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const currentPosition = clientX;
        const diff = currentPosition - startPos;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (sliderRef.current) {
            sliderRef.current.style.cursor = "grab";
        }

        const movedBy = currentTranslate - prevTranslate;
        const threshold = 50; // minimum drag distance to trigger slide change

        if (movedBy < -threshold && currentSlide < totalSlides - 1) {
            // Dragged left - next slide
            setCurrentSlide(currentSlide + 1);
        } else if (movedBy > threshold && currentSlide > 0) {
            // Dragged right - previous slide
            setCurrentSlide(currentSlide - 1);
        }

        // Reset translation
        setCurrentTranslate(0);
        setPrevTranslate(0);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleDragEnd();
        }
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    return (
        <section
            ref={sliderRef}
            className="relative w-full overflow-hidden md:max-h-208.5 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {showModal && (
                <SeeHowItWorksModal isOpen onClose={handleCloseModal} />
            )}

            {/* Background Images Container */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                        style={{
                            opacity: currentSlide === index ? 1 : 0,
                            pointerEvents: currentSlide === index ? "auto" : "none",
                        }}
                    >
                        <img
                            src={slide.img}
                            loading="eager"
                            className="w-full h-full min-h-full object-cover object-[center_25%] pointer-events-none"
                            alt={`Slide ${index + 1}`}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-cover bg-center sm:bg-top-left bg-no-repeat bg-[linear-gradient(180deg,rgba(45,158,83,0)_67.87%,#2D9E53_100%), linear-gradient(90deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]"></div>

            {/* Content */}
            <div className="relative z-10 h-250 md:h-162.5 lg:h-150 xl:h-152.5 2xl:h-175 lg:min-h-0 flex items-end lg:items-end mx-auto px-4 sm:px-6 xl:px-14 2xl:px-32 py-12 sm:py-16 lg:py-32 lg:pb-10">
                <div className="flex flex-col lg:flex-row gap-2 sm:gap-10 lg:gap-12 items-center text-center lg:text-left lg:items-end w-full pointer-events-none">
                    {/* Left Column - Text Content */}
                    <div className="text-white space-y-2 lg:space-y-4 sm:space-y-6 max-w-175 xl:max-w-216.5 w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[60px] font-bold leading-tight transition-all duration-500">
                            {slides[currentSlide].text
                                .split("<br/>")
                                .map((line, i) => (
                                    <span key={i}>
                                        {line}
                                       
                                    </span>
                                ))}
                        </h1>

                        <p className="text-[15px] sm:text-[17px] xl:text-[18px] text-gray-200 leading-relaxed">
                            ScholarPresent helps school principals and teachers
                            cut through the chaos of administration by bringing
                            everything together in one integrated platform. This
                            makes it easier to engage parents and students,
                            reduce admin burdens, and run schools more smoothly.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-1 lg:gap-3 sm:gap-4 pt-2 sm:pt-4 pointer-events-auto">
                            <BlueBtn handleClick={handleOpenModal}>
                                See How It Works (Free Demo)
                            </BlueBtn>
                            <a
                                href="#signin"
                                className="text-white hover:text-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-center text-[14px] sm:text-[16px] underline underline-offset-4"
                            >
                                Already Using Our Platform? Sign In
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Stats Card */}
                    <div className="lg:ml-auto w-full lg:w-auto md:hidden lg:block max-w-xs mx-auto lg:mx-0">
                        <div className="w-full">
                            <img
                                src="/avatars.png"
                                alt="Member"
                                className="border-white mx-auto lg:w-full h-auto w-40 pointer-events-none"
                                draggable={false}
                            />

                            {/* Stats */}
                            <div className="space-y-1 mt-2">
                                <h3 className="text-[24px] sm:text-[28px] font-bold text-white">
                                    <span className="text-[#D9FF00]">12k+</span>{" "}
                                    <span className="font-bold">Members</span>
                                </h3>
                                <p className="text-gray-200 text-[13px] sm:text-[14px]">
                                    Using Scholar Present Platform
                                </p>
                            </div>

                            {/* Progress Bar */}
                            <div className="hidden lg:block mt-4 sm:mt-6 space-y-2">
                                <div className="flex justify-between text-white text-sm font-medium">
                                    <span>
                                        {String(currentSlide + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>
                                    <span>
                                        {String(totalSlides).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="w-full bg-white h-1.5 rounded-full">
                                    <div
                                        className="bg-yellow-400 h-1.5 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${
                                                ((currentSlide + 1) /
                                                    totalSlides) *
                                                100
                                            }%`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;