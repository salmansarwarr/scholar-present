const PricingFAQs = ({ faqs, onGetStarted }: {faqs: {question: string, answer: string}[], onGetStarted: () => void}) => {
    return (
        <div className="hidden lg:block w-full mx-auto px-12 py-12 max-w-[1680px] my-18 mt-20">
            {/* Header */}
            <h2 className="text-6xl font-bold text-[#0E0C15] text-center mb-12">
                Pricing FAQs
            </h2>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        <h3 className="text-2xl font-bold text-[#17102F] mb-3">
                            {faq.question}
                        </h3>
                        <p className="text-[16px] text-[#65676C] leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <button
                    onClick={onGetStarted}
                    className="bg-[#2D9E53] mt-4 text-[16px] text-white w-full max-w-[340px] px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default PricingFAQs;
