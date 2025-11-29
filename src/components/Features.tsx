const Features = () => {
    return (
        <section className="py-10 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <img
                            src="/icons/chaos.png"
                            alt="Administrative icon"
                            className="w-20 h-20 mb-4"
                        />

                        <h3 className="text-xl font-bold mb-3">
                            Administrative Chaos. Does This Sound Familiar?
                        </h3>
                        <p className="text-gray-600">
                            Are you being overwhelmed by reporting,
                            administrative tasks and unrealistic deadlines? Are
                            you report being overwhelmed by administrative tasks
                            and unrealistic deadlines?
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <img
                            src="/icons/disconnect.png"
                            alt="Communication icon"
                            className="w-20 h-20 mb-4"
                        />
                        <h3 className="text-xl font-bold mb-3">
                            Communication Disconnect
                        </h3>
                        <p className="text-gray-600">
                            Tired of spending money on SMS and printing, only
                            for parents to say they never got the message?
                            WhatsApp groups create privacy nightmares and mix-up
                            personal and school communication?
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <img
                            src="/icons/anxiety.png"
                            alt="Anxiety icon"
                            className="w-20 h-20 mb-4"
                        />
                        <h3 className="text-xl font-bold mb-3">
                            Constant Anxiety
                        </h3>
                        <p className="text-gray-600">
                            Are you overwhelmed by negative audit finding due to
                            manual administrative errors?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
