import { useState } from "react";
import SeeHowItWorksModal from "./SeeHowItWorksModal";

const HeroSection = ({
    heroImg,
    heroImgMobile,
    heroTxt,
    heroDesc,
}: {
    heroImg: string;
    heroImgMobile?: string;
    heroTxt: string;
    heroDesc?: string;
}) => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="relative  w-full overflow-hidden md:max-h-[634px]">
            {showModal && (
                <SeeHowItWorksModal isOpen onClose={handleCloseModal} />
            )}
            {/* Background Image */}
            <div
                className="hidden md:block
  absolute inset-0 bg-cover bg-center bg-no-repeat
  bg-[linear-gradient(180deg,rgba(45,158,83,0)_67.87%,#2D9E53_100%),
      linear-gradient(90deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]"
                style={{ backgroundImage: `url(${heroImg})` }}
            ></div>

            <div
                className="md:hidden
  absolute inset-0 bg-cover bg-center sm:bg-top-left bg-no-repeat
  bg-[linear-gradient(180deg,rgba(45,158,83,0)_67.87%,#2D9E53_100%),
      linear-gradient(90deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]"
                style={{ backgroundImage: `url(${heroImgMobile})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 h-[600px] md:h-[670px] lg:h-[600px] xl:h-[610px] 2xl:h-[500px] lg:min-h-0 flex items-end lg:items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 lg:pb-10">
                <div className="flex flex-col lg:flex-row gap-2 sm:gap-10 lg:gap-12 items-center text-center lg:text-left lg:items-end w-full">
                    {/* Left Column - Text Content */}
                    <div className="text-white space-y-2 lg:space-y-4 sm:space-y-6 max-w-[700px] w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            {heroTxt.split("<br/>").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < heroTxt.split("<br/>").length - 1 && (
                                        <br />
                                    )}
                                </span>
                            ))}
                        </h1>

                        <p className="text-[15px] sm:text-[17px] text-gray-200 leading-relaxed">
                            {heroDesc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
