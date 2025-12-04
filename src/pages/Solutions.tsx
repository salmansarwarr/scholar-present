import HeroSection from "../components/Hero";
import SolutionCard from "../components/SoultionCard";

const cards = [
    {
        img: "/gallery/11.png",
        module: "Messaging Module",
        title: "Smart School Communication That Actually Reaches Parents",
        problem:
            "Schools struggle to keep contacts updated, printing is costly, SMS is one-way, and WhatsApp groups create privacy risks.",
        solutionDesc:
            "ScholarPresent Messaging makes communication simple, affordable, and effective:",
        solutionPoints: [
            "Central parent/student contact database (always updated).",
            "Multi-channel messaging (app, SMS, email).",
            "Targeted messages to the right parents.",
            "Privacy-protected, professional communication.",
        ],
        benefitPoints: [
            "Parents engaged, not overwhelmed.",
            "Reduced printing and SMS costs.",
            "Clear, controlled school communication.",
        ],
    },
    {
        img: "/gallery/8.png",
        module: "collections Module",
        title: "Simple, Reliable Collections for School Fees and Payments",
        problem:
            "Schools struggle to collect fees on time, track payments, and reduce arrears. Manual collections are stressful, error-prone, and time-consuming.",
        solutionDesc:
            "ScholarPresent Collections ensures smooth, trackable payments:",
        solutionPoints: [
            "Debit order, card, and mobile payments integrated.",
            "Parents can pay easily through multiple channels.",
            "Automated reminders for outstanding fees.",
            "Real-time reports on payments and arrears.",
            "Transparent receipts for schools and parents.",
        ],
        benefitPoints: [
            "Fewer missed payments.",
            "Clear, controlled school communication.",
            "Parents find it easy to pay anytime, anywhere.",
        ],
    },
    {
        img: "/gallery/9.png",
        module: "Finance Module",
        title: "Scholar Present Finance — Real Time School Finances Made Simple",
        problem:
            "Manual cashbooks, piles of files, no real-time view, errors, lost receipts, and audit risks.",
        solutionDesc:
            "ScholarPresent SmartFin99 gives schools financial control:",
        solutionPoints: [
            "Real-time digital accounting.",
            "Automated receipting, no more paper slips.",
            "Cloud storage with secure backups.",
            "Compliance-ready audit trails.",
            "Accessible even if staff are absent",
        ],
        benefitPoints: [
            "Principals in control of finances.",
            "Staff save hours of admin time.",
            "Audits build trust, not stress.",
        ],
    },
    {
        img: "/gallery/12.png",
        module: "Attendance Solution",
        title: "Know Instantly When Learners Are Absent",
        problem:
            "Learners skip school unnoticed, parents are notified too late, and clerks redo work in SAMS.",
        solutionDesc:
            "ScholarPresent Attendance tracks and alerts in real time:",
        solutionPoints: [
            "Digital learner check-in/out.",
            "Instant parent notifications.",
            "Cloud storage with secure backups.",
            "Direct integration with SAMS.",
            "Real-time oversight for attendance bodies.",
        ],
        benefitPoints: [
            "Parents know immediately if a learner misses class.",
            "No double capturing.",
            "Learner safety and accountability improved.",
        ],
    },
    {
        img: "/gallery/10.png",
        module: "Calendar Solution",
        title: "Stay Ahead with a Clear, Connected School Calendar",
        problem:
            "Missed deadlines, overlapping exams, inconsistent updates, and paper-based scheduling.",
        solutionDesc: "ScholarPresent Calendar keeps everyone aligned:",
        solutionPoints: [
            "Central digital calendar for all events.",
            "Real-time updates for staff and parents.",
            "Automated reminders and alerts.",
            "Prevents clashes and confusion.",
        ],
        benefitPoints: [
            "No more missed deadlines.",
            "Teachers always in the loop.",
            "Parents informed of school events on time.",
        ],
    },
    {
        img: "/gallery/10.png",
        module: "Documents Solution",
        title: "Secure, Digital Documents at Your Fingertips",
        problem:
            "Schools spend thousands on printing, policies get lost, and digital sharing is limited.",
        solutionDesc:
            "ScholarPresent Documents simplifies document management:",
        solutionPoints: [
            "Secure cloud storage for policies, notices, and reports.",
            "Share instantly with staff and parents.",
            "Reduce printing costs dramatically.",
            "Flexible file sizes and formats supported.",
        ],
        benefitPoints: [
            "No more missing policies.",
            "Save R200K+ annually in printing.",
            "Digital, secure, and always accessible.",
        ],
    },
];

const Solutions = () => {
    return (
        <div>
            <HeroSection
                heroImg="/hero/solutions.png"
                heroImgMobile="/hero/solutions-mob.png"
                heroTxt="One Platform, Every <br/> Solution"
                heroDesc="Tired of juggling a dozen different tools? We bring all the critical functions of your school into one simple, powerful platform. Solve your biggest challenges and unlock time and resources for what matters most."
            />
            <div className="bg-[#f6f6f6] md:px-4">
                <div className="md:py-10 bg-[#f6f6f6]">
                    {cards.map((card, index) => (
                        <SolutionCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
