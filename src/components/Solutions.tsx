import BlueBtn from "./BlueBtn";

const Solutions = () => {
    return (
        <section className="py-20 bg-[#f6f6f6]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 flex justify-between max-w-6xl mx-auto">
                    <h2 className="text-[29.7px] md:text-4xl font-bold text-gray-900 mb-4 max-w-[750px] lg:text-left">
                        How One Platform Solves Your Biggest Challenges
                    </h2>
                    <BlueBtn withArrow classNames="hidden lg:inline-flex">Explore All Solutions</BlueBtn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Messaging Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Messaging
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        Affordable, targeted messages that parents actually read.
                        </p>
                    </div>

                    {/* Finance Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Finance
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        Automated cashbooks and receipts for audit-ready clarity.
                        </p>
                    </div>

                    {/* Attendance Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Attendance
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        Instant absence alerts to keep learners safe.
                        </p>
                    </div>

                    {/* Collections Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Collections
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        Digital hub for effortless document storage and sharing, saving time, money, and trees.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12 lg:hidden">
                    <BlueBtn withArrow>Explore All Solutions</BlueBtn>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
