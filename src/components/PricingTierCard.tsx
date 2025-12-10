const PricingTierCard = () => {
    const features = [
        "Unlimited number of teachers",
        "Unlimited learners",
        "Insights: Live + historical",
        "Mobile app support",
        "Unlimited boards",
    ];

    return (
        <div className="w-full">
            <div className="bg-white shadow lg:rounded-2xl">
                {/* Yellow header */}
                <div className="bg-yellow-400 rounded-b-2xl text-center py-5 mx-4">
                    <span className="text-2xl font-medium text-white">
                        Monthly pricing
                    </span>
                </div>

                {/* Green circle with price */}
                <div className="flex justify-center my-4">
                    <div className="w-35 h-35 bg-[#2D9E53] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">
                            R149 pm
                        </span>
                    </div>
                </div>

                {/* Features list */}
                <div className="px-6 pb-6">
                    <ul className="space-y-3 mb-6">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className={`text-black border-gray-200 py-2 text-sm text-center ${
                                    index === features.length - 1
                                        ? "border-0"
                                        : "border-b"
                                }`}
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="w-full bg-[#2D9E53] text-white py-4 rounded-full font-medium hover:bg-green-700 transition-colors duration-200">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="hidden lg:block mt-4 bg-white p-6 rounded-2xl shadow">
                <h3 className="text-[32px] font-bold text-[#0E0C15] mb-4">
                    Benefits and features
                </h3>

                {/* Benefits List */}
                <div className="space-y-8">
                    <p className="text-[#65676C] text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Eget ut ut at
                        non elit pharetra.
                    </p>
                    <p className="text-[#65676C] text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Eget purus diam
                        adipiscing feugiat elit potenti nunc leo vel. Vitae
                        scelerisque aenean cras erat elit eu.
                    </p>
                    <p className="text-[#65676C] text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Est diam at ut
                        vestibulum proin.
                    </p>
                    <p className="text-[#65676C] text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Sed at et tempor
                        convallis tellus. Turpis cursus ultricies proin odio
                        enim enim.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingTierCard;
