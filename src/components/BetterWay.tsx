const BetterWay = () => {
    return (
        <section className="py-10 lg:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-14">
                <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
                    <div className="max-w-160">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-8">
                            There's a Better Way to Lead Your School
                        </h2>
                        <p className="text-gray-600 mb-4 lg:mb-8">
                            At ScholarPresent, we believe a principal's focus
                            should be on leading teaching and learning, not
                            managing everything manually. Your expertise is best
                            spent shaping your school's future, not drowning in
                            manual administration. We provide one integrated
                            platform compliant with the administration
                            requirements, but it gives you back control, saves
                            your school money, and brings peace of mind.
                        </p>

                        <div className="lg:hidden mb-4">
                            <img
                                src="teacher.png"
                                alt="Teacher in classroom"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>

                        <div className="bg-linear-to-r from-[#359e51] to-[#98c03d] text-white p-6 px-4 rounded-xl mb-8 lg:mb-16">
                            <div className="text-[18px] font-semibold mb-6">
                            This platform saved us over R100,000 in printing costs in year one.
                            </div>
                            <div className="text-[14px]">
                            - Principal Thabo, Johannesburg
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-center lg:text-left text-[#2D9E53] mb-4 lg:mb-6 font-bold">
                                SCHOOLS THAT ARE ALREADY BENEFITING
                            </p>
                            <div className="flex flex-wrap gap-4 items-center justify-center lg:ml-[-35px]">
                                <img
                                    src="schools/school1.png"
                                    alt="School logo"
                                    className="h-14 xl:h-20"
                                />
                                <img
                                    src="schools/school2.png"
                                    alt="School logo"
                                    className="h-14 xl:h-20"
                                />
                                <img
                                    src="schools/school3.png"
                                    alt="School logo"
                                    className="h-14 xl:h-20"
                                />
                                <img
                                    src="schools/school4.png"
                                    alt="School logo"
                                    className="h-14 xl:h-20"
                                />
                                <img
                                    src="schools/school5.png"
                                    alt="School logo"
                                    className="h-14 xl:h-20"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="teacher.png"
                            alt="Teacher in classroom"
                            className="rounded-2xl shadow-xl hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BetterWay;
