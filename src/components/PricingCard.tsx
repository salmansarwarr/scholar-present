interface PricingCardProps {
    title: string;
    subtitle: string;
    description: string;
    price: string;
    currency: string;
    period: string;
    perLearnerCost: string;
    badges: string[];
    features: string[];
    addOnsDescription?: string;
    onboarding: string;
    training: string;
    buttonText: string;
    onButtonClick?: () => void;
    isBordered?: boolean;
}

const PricingCard = ({
    title,
    subtitle,
    description,
    price,
    currency,
    period,
    perLearnerCost,
    badges,
    features,
    addOnsDescription,
    onboarding,
    training,
    buttonText,
    onButtonClick,
    isBordered,
}: PricingCardProps) => {
    return (
        <div
            className={`w-full max-w-md bg-white rounded-2xl shadow-lg p-6 ${
                isBordered && "xl:border xl:border-[#2D9E53]"
            }`}
        >
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-[32px] font-bold text-gray-900">{title}</h2>
                <p className="text-lg text-gray-900 mb-2">{subtitle}</p>
                <p className="text-sm text-[#65676C]">{description}</p>
            </div>

            {/* Pricing */}
            <div className="mb-8">
                <div className="flex items-baseline mb-2">
                    <span className="text-[40px] font-bold text-gray-900">
                        {currency} {price}
                    </span>
                    <span className="text-[#65676C] ml-2">/ {period}</span>
                </div>
                <p className="text-sm text-[#65676C]">{perLearnerCost}</p>
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Features - Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
                {badges.map((badge, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gray-200 text-[#17102F] text-sm rounded-full"
                    >
                        {badge}
                    </span>
                ))}
            </div>

            {/* Features - List */}
            <div className="mb-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full shrink-0" />
                        <span className="text-gray-900">{feature}</span>
                    </div>
                ))}
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Add-ons */}
            <div className="mb-8">
                <h3 className="font-bold text-[#5C717E] uppercase mb-2">
                    Add-ons
                </h3>
                <p className="text-[#17102F] mb-6">{addOnsDescription}</p>

                <hr className="border-gray-200 mb-6" />

                <div className="space-y-3">
                    <p className="text-[#17102F">
                        <span className="font-semibold">Onboarding:</span> R
                        {onboarding}
                    </p>
                    <p className="text-[#17102F">
                        <span className="font-semibold">Training:</span> R
                        {training}
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <button
                onClick={onButtonClick}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 mb-4 mt-10"
            >
                {buttonText}
            </button>

            {/* Footer text */}
            <p className="text-center text-[#65676C]">
                Cancel or change plan anytime. Add modules as you grow.
            </p>
        </div>
    );
};

export default PricingCard;
