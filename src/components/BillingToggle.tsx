const BillingToggle = ({ value, onChange }: {value: boolean, onChange: (value: boolean) => void}) => {
    return (
        <div className="inline-flex items-center gap-3 my-4 self-center">
            <span
                className={`font-medium transition-colors duration-200 text-gray-900`}
            >
                Monthly
            </span>

            <button
                onClick={() => onChange(!value)}
                className="relative w-20 h-10 bg-white rounded-full transition-all duration-300 focus:outline-none border border-[#0E0C151A]"
            >
                <span
                    className={`absolute top-1 left-1 w-8 h-8 bg-[#0E0C15] rounded-full transition-transform duration-300 ${
                        value ? "translate-x-9" : "translate-x-0"
                    }`}
                />
            </button>

            <span
                className={`font-medium transition-colors duration-200 text-gray-900`}
            >
                Annually
            </span>
        </div>
    );
};

export default BillingToggle;
