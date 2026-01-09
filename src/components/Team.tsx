const Team = () => {
    return (
        <div className="max-w-6xl py-5 pb-10 md:py-8 lg:pb-20 mx-auto  rounded-2xl overflow-hidden">
            <div className=" text-emerald-500 uppercase text-center font-semibold px-3 py-1 rounded mb-2">
                Meet the Team
            </div>
            <h1 className="text-[33px] md:text-4xl font-bold text-gray-900 leading-tight text-center mb-2 lg:mb-10 px-2">
                The People Behind the Mission
            </h1>

            <div className="grid lg:grid-cols-3 gap-6 px-5 lg:gap-6 lg:px-5 lg:justify-center text-center lg:text-left">
                <div className="lg:mt-10 xl:mt-20">
                    <div className=" xl:h-auto flex flex-col justify-end xl:shadow-lg xl:rounded-2xl xl:px-10 xl:pb-0 xl:bg-white py-4">
                        <img
                            src="/team/1.png"
                            alt="Family using tablet together"
                            className="shadow-lg xl:shadow-none rounded-xl xl:rounded-none w-full object-cover object-bottom"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1 mt-4 xl:mt-4">
                    Mulalo Nethononda
                    </h3>
                    <p className="text-gray-600">CE: Sales & Distribution</p>
                </div>

                <div className="self-start">
                    <div className="relative py-4 flex flex-col justify-end h-auto">
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="/team/2.png"
                                alt="Team member"
                                className="shadow-lg rounded-xl w-full object-cover object-bottom transform scale-x-[-1]"
                            />
                            {/* Gradient overlay - bottom half only */}
                            <div className="absolute bottom-0 left-0 right-0 h-2/3 rounded-xl bg-linear-to-t from-[#00A650]/80 to-transparent"></div>
                            {/* Text on overlay */}
                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 w-full">
                                <p className="text-white text-sm sm:text-base leading-relaxed">
                                    With over 10 years in EdTech, [Name] is
                                    obsessed with creating software that is both
                                    powerful and simple enough for any teacher
                                    to use.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1 mt-2">
                    Lenkwe Makhubela
                    </h3>
                    <p className="text-gray-600">CE: Chief Executive Officer</p>
                </div>

                {/* Third Team Member */}
                <div className="lg:mt-10 xl:mt-20">
                    <div className=" xl:h-auto flex flex-col justify-end xl:shadow-lg xl:rounded-2xl xl:px-10 xl:pb-0 xl:bg-white py-4">
                        <img
                            src="/team/3.png"
                            alt="Family using tablet together"
                            className="shadow-lg xl:shadow-none rounded-xl xl:rounded-none w-full object-cover object-bottom"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1 mt-4 xl:mt-4">
                    Nomthi Nkosi
                    </h3>
                    <p className="text-gray-600">Sales: Pretoria East</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
