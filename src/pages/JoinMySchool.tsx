import HeroSection from "../components/Hero";
import heroDesktop from "../assets/hero/join.png";
import heroMobile from "../assets/hero/join-mob.png";

const JoinMySchool = () => {
    return (
        <div className="bg-[#f6f7f7]">
            <HeroSection
                heroImg={heroDesktop}
                heroImgMobile={heroMobile}
                heroTxt="Easily Connect with Your School Community"
                heroDesc="Whether you're a parent, teacher, or student - stay informed, engaged, and connected with your school community in one secure place."
            />

            <div className="w-full max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[40px] md:text-4xl font-bold text-[#0E0C15] mb-4">
                        The Challenge for School Communities
                    </h2>
                    <p className="text-[#65676C] text-[16px] max-w-2xl mx-auto">
                        Whether you're a parent, teacher, or student - stay
                        informed, engaged, and connected with your school
                        community in one secure place.
                    </p>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1396px] px-10">
                    <div className="bg-white rounded-2xl p-5 lg:p-8 shadow">
                        <h3 className="text-[28px] font-bold text-[#17102F] mb-6">
                            I Received an Invitation
                        </h3>
                        <ol className="space-y-4 text-[16px] text-[#17102F]">
                            <li className="text-sm leading-relaxed">
                                1. Enter your{" "}
                                <span className="font-semibold">email</span> or{" "}
                                <span className="font-semibold">
                                    mobile number.
                                </span>
                            </li>
                            <li className="text-sm leading-relaxed">
                                2. Receive a{" "}
                                <span className="font-semibold">
                                    One-Time PIN (OTP).
                                </span>
                            </li>
                            <li className="text-sm leading-relaxed">
                                3. Instantly access your school updates and
                                resources.
                            </li>
                        </ol>
                    </div>
                    <div className="bg-white rounded-2xl p-5 lg:p-8 shadow-sm">
                        <h3 className="text-[28px] font-bold text-[#17102F] mb-6">
                            I Don't Have an Invitation
                        </h3>
                        <ol className="space-y-4 text-[16px] text-[#17102F]">
                            <li className=" text-sm leading-relaxed">
                                1. Search for your school.
                            </li>
                            <li className="text-sm leading-relaxed">
                                2. Send a{" "}
                                <span className="font-semibold">
                                    join request.
                                </span>
                            </li>
                            <li className="text-sm leading-relaxed">
                                3. Wait for approval and start receiving
                                updates.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinMySchool;
