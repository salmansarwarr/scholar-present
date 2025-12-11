import { Building2, Clock, ShieldCheck } from "lucide-react";
import SupportForm from "./SupportForm";

const features = [
    "Instant Parent Comms",
    "Real-Time Attendance",
    "Reliable Collections",
    "One Platform",
    "Clear Finances",
    "Secure Documents",
];

const CheckIcon = () => (
    <svg 
      className="w-5 h-5 shrink-0" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

const FormSection = () => {
    return (
        <div className="bg-[#f6f7f7] flex flex-col lg:flex-row lg:justify-between py-8 pb-4 md:px-12 md:py-12 lg:py-20 lg:pb-10 xl:pb-15">
            <div className="max-w-[550px] mx-auto px-6 flex flex-col items-center lg:items-start">
                <h1 className="text-[29px] md:text-5xl font-bold text-gray-900 mb-4">
                    We get the struggle
                </h1>

                <p className="text-[#65676C] text-center text-[16px] lg:text-left mb-4 max-w-2xl">
                    Running a school is overwhelming comms, finances,
                    attendance, documents. You shouldn't have to fight your
                    systems.
                </p>

                <div className="inline-flex w-full text-[16px] items-center gap-2 bg-[#EAEAEA] px-4 py-3 rounded-md shadow-sm mb-4">
                    <ShieldCheck className="w-5 h-5 text-black" />
                    <span className="text-sm font-medium text-black">
                        ScholarPresent is your guide.
                    </span>
                </div>

                <div className="flex gap-3 text-[16px] justify-center">
                    <div className="space-y-2">
                        <div className="text-black border border-[#E4E4E4] rounded-lg px-4 py-3 w-full bg-white text-sm font-medium">
                            1. Share
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-black border border-[#E4E4E4] rounded-lg px-4 py-3 w-full bg-white text-sm font-medium">
                            2. Guide
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-black border border-[#E4E4E4] rounded-lg px-4 py-3 w-full bg-white text-sm font-medium">
                            3. Win
                        </div>
                    </div>
                </div>
            </div>
            <div>

            <SupportForm />
            <div className=" p-4 sm:px-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white h-[175px] rounded-2xl p-4  shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-5 h-5" />
                            <h3 className="font-semibold text-[18px] uppercase tracking-wide">
                                OFFICES
                            </h3>
                        </div>
                        <div className="space-y-1 text-[#65676C] leading-relaxed">
                            <p>Johannesburg: 123 Oxford</p>
                                <p>Rd, Rosebank, 2196</p> 
                            <p>Cape Town: 45 Loop Street, CBD, 8001</p>
                        </div>
                    </div>

                    <div className="bg-white h-[175px] rounded-2xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-5 h-5" />
                            <h3 className="font-semibold text-[18px] uppercase tracking-wide">
                                HOURS
                            </h3>
                        </div>
                        <p className="text-[#65676C] ">
                            Mon-Fri, 08:00-17:00 SAST
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="leading-relaxed">
                        What's at stake:
                        Slow parent responses. Lost fees & manual work. No clear
                        picture
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex border border-[#0E0C151A] items-center font-medium text-[#0E0C15] gap-2 bg-white rounded-full p-2">
                            <CheckIcon/>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default FormSection;
