import AboutUsSection from "../components/AboutUsSection";
import HeroSection from "../components/Hero";
import Team from "../components/Team";
import TestimonialCard from "../components/TestimonialCard";
import heroDesktop from "../assets/hero/about.png";
import heroMobile from "../assets/hero/about-mob.png";

const AboutUs = () => {
    return (
        <div className="bg-[#f6f6f6]">
            <HeroSection
                heroImg={heroDesktop}
                heroImgMobile={heroMobile}
                heroTxt="We Believe Your School’s Resources Should Be Spent on Learners, Not Paperwork."
                heroDesc="Your mission is to educate and protect children. Our mission is to clear away the administrative chaos that stands in your way."
            />
            <div className="w-full flex flex-col items-center lg:py-10">
                <AboutUsSection cardNo={1} lgHidden />
                <div className="hidden lg:flex lg:flex-col lg:gap-8">
                    <div id="section-1">
                        <AboutUsSection cardNo={1} />
                    </div>
                    <div id="section-2">
                        <AboutUsSection cardNo={2} />
                    </div>
                    <div id="section-3">
                        <AboutUsSection cardNo={3} />
                    </div>
                </div>
            </div>
            <Team />
            <div className="bg-white text-center py-10 lg:py-16 px-3 lg:px-20 flex flex-col items-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center mb-4 px-2">
                    Social Proof & Credibility
                </h1>
                <p className="text-gray-600 lg:text-base leading-relaxed lg:max-w-[700px]">
                    Our school is recognized for its strong academic foundation
                    and supportive learning environment. Experienced teachers
                    guide students with care and dedication, ensuring steady
                    progress and confidence. A focus on discipline, values, and
                    achievement helps students grow academically and personally.
                </p>
                <TestimonialCard />
            </div>
        </div>
    );
};

export default AboutUs;
