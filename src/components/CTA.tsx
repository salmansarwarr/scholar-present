import BlueBtn from "./BlueBtn";

const CTA = () => {
    return (
        <section className="py-20 bg-linear-to-r from-[#359e51] to-[#98c03d] text-white">
            <div className="container mx-auto px-6 text-center max-w-[775px]">
                <h2 className="text-4xl xl:text-5xl font-bold mb-4">
                    Ready to Reclaim Your Time?
                </h2>
                <p className="text-[18px] mb-8 opacity-90 text-[#F9FEE7]">
                    Join thousands of schools making the switch. See the
                    difference streamlinehq can make for your educational
                    institution.
                </p>
                <BlueBtn classNames="text-sm">Book Your Free Demo Today</BlueBtn>
            </div>
        </section>
    );
};

export default CTA;
