import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import FormSection from "../components/FormSection";

const JoinMySchoolForm = () => {
    return (
        <div className="bg-[#f6f7f7]">
            <section className="relative  w-full overflow-hidden md:max-h-[634px]">
                {/* Background Image */}
                <div
                    className="hidden md:block
  absolute inset-0 bg-cover bg-center bg-no-repeat
  bg-[linear-gradient(180deg,rgba(45,158,83,0)_67.87%,#2D9E53_100%),
      linear-gradient(90deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]"
                    style={{ backgroundImage: `url(/hero/form.png)` }}
                ></div>

                <div
                    className="md:hidden
  absolute inset-0 bg-cover bg-center sm:bg-top-left bg-no-repeat
  bg-[linear-gradient(180deg,rgba(45,158,83,0)_67.87%,#2D9E53_100%),
      linear-gradient(90deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]"
                    style={{ backgroundImage: `url(/hero/form-mob.png)` }}
                ></div>

                {/* Content */}
                <div className="relative z-10 h-[600px] md:h-[670px] lg:h-[600px] xl:h-[610px] 2xl:h-[500px] lg:min-h-0 flex items-end lg:items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 lg:pb-10">
                    <div className="flex flex-col lg:flex-row gap-2 sm:gap-10 lg:gap-12 items-center text-center lg:text-left lg:items-end w-full">
                        <div className="text-white space-y-2 lg:space-y-4 sm:space-y-6 max-w-[700px] w-full">
                            <div className="uppercase font-semibold rounded-full hidden lg:flex justify-center items-center border border-white/30 leading-tight max-w-[363px] p-2 bg-white/10 backdrop-blur-sm">
                                <p>Every school admin task in one place</p>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-[600px]">
                                Let's simplify your school admin -
                                together.
                            </h1>

                            <p className="text-[15px] sm:text-[17px] text-gray-200 leading-relaxed">
                                Every great partnership starts with a
                                conversation. Pick why you're reaching out and
                                we'll guide you to the simplest next step.
                            </p>

                            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10 mt-4 font-semibold lg:my-10">
                                <div className="flex gap-2">
                                    <PhoneIcon />
                                    <p>+27 10 000 0000</p>
                                </div>
                                <div className="flex gap-2">
                                    <MailIcon />
                                    <p>hello@scholarpresent.com</p>
                                </div>
                                <div className="flex gap-2">
                                    <HomeIcon />
                                    <p>Johannesburg. Cape Town</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FormSection/>
        </div>
    );
};

export default JoinMySchoolForm;
