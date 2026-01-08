import { CheckIcon } from "lucide-react";

const AboutUsSectionCard = ({ cardNo }: { cardNo: number }) => {
    return (
<div className="max-w-[900px] lg:w-full bg-white p-6 md:p-8 space-y-6 lg:rounded-2xl lg:shadow-lg border border-gray-100">
            {cardNo !== 1 && (
                <>
                    <div className="space-y-4">
                        <h1 className="text-xl font-bold text-gray-900">
                            {cardNo === 2
                                ? "We believe"
                                : "We built Scholar Present as the all-in-one solution we wished existed. It’s not just a suite of tools; it’s a new way to work:"}
                        </h1>
                        {cardNo === 2 ? (
                            <ul className="space-y-3">
                                <li className="flex items-start group">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 shrink-0 group-hover:bg-emerald-200 transition-colors">
                                        <CheckIcon className="w-3 h-3 text-emerald-600 stroke-3" />
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        Technology should simplify a principal's
                                        job, not complicate it.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 shrink-0 group-hover:bg-emerald-200 transition-colors">
                                        <CheckIcon className="w-3 h-3 text-emerald-600 stroke-3" />
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        Every school deserves access to modern
                                        tools without breaking the budget.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 shrink-0 group-hover:bg-emerald-200 transition-colors">
                                        <CheckIcon className="w-3 h-3 text-emerald-600 stroke-3" />
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        Better data leads to better decisions
                                        for students and staff.
                                    </span>
                                </li>
                            </ul>
                        ) : (
                            <ul className="space-y-3">
                                <li className="flex items-start group">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 shrink-0 group-hover:bg-emerald-200 transition-colors">
                                        <CheckIcon className="w-3 h-3 text-emerald-600 stroke-3" />
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        We automate the tedious,** like manual
                                        attendance and cashbooks, to eliminate
                                        errors and save you time
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 shrink-0 group-hover:bg-emerald-200 transition-colors">
                                        <CheckIcon className="w-3 h-3 text-emerald-600 stroke-3" />
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        We unify the fragmented,** bringing
                                        communication, documents, and scheduling
                                        into one secure hub.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 mr-3 shrink-0 group-hover:bg-emerald-200 transition-colors">
                                        <CheckIcon className="w-3 h-3 text-emerald-600 stroke-3" />
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        We provide clarity,** with real-time
                                        dashboards so you always have a pulse on
                                        your school’s health.
                                    </span>
                                </li>
                            </ul>
                        )}
                    </div>

                    {cardNo === 2 && <hr className="border-gray-200" />}

                    {cardNo === 2 && (
                        <div className="space-y-4">
                            <h1 className="text-xl  font-bold text-gray-900">
                                Our mission is simple
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                To give you back your time, your budget, and
                                your peace of mind through technology that just
                                works.
                            </p>
                        </div>
                    )}

                    {cardNo === 3 && (
                        <p className="text-gray-900 text-sm md:text-base leading-relaxed">
                            We are your guide, providing a clear plan to
                            overcome chaos.
                        </p>
                    )}
                </>
            )}

            {cardNo === 1 && (
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Today, school leaders are heroes battling invisible enemies:
                    wasted budgets, mounting paperwork, and the constant anxiety
                    of something falling through the cracks. We see you spending
                    countless hours on manual tasks instead of strategic
                    leadership. We see the frustration when a vital message
                    doesn’t get home. We know that every rand spent on paper and
                    inefficient systems is a rand taken directly from a
                    classroom.
                </p>
            )}

            <div className="pt-2">
                <img
                    src={`/solutions/${cardNo}.png`}
                    alt="Teacher with students looking at a globe"
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                />
            </div>
        </div>
    );
};

export default AboutUsSectionCard;
