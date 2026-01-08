import { useState } from "react";
import BlueBtn from "./BlueBtn";
import SeeHowItWorksModal from "./SeeHowItWorksModal";

const CTA = () => {
        const [showModal, setShowModal] = useState(false);

    return (
        <>
        <SeeHowItWorksModal isOpen={showModal} onClose={() => setShowModal(false)} />
        <section className="py-20 bg-linear-to-r from-[#359e51] to-[#98c03d] text-white">
            <div className="container mx-auto px-6 text-center max-w-193.75">
                <h2 className="text-4xl xl:text-5xl font-bold mb-4">
                    Ready to Reclaim Your Time?
                </h2>
                <p className="text-[18px] mb-8 opacity-90 text-[#F9FEE7]">
                Join hundreds of schools that have made the switch. See the platform in action with a free, no-obligation demo.
                </p>
                <BlueBtn handleClick={() => setShowModal(true)} classNames="text-sm">Book Your Free Demo Today</BlueBtn>
            </div>
        </section>
        </>
    );
};

export default CTA;
