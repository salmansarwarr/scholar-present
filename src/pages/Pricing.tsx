const Pricing = () => {
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
        </div>
    );
};

export default Pricing;
