import { useState } from "react";
import { X } from "lucide-react";

const SeeHowItWorksModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        schoolName: "",
        numberOfLearners: "",
        schoolRole: "",
        newsletter: true,
        terms: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div
                className="
          bg-white 
          rounded-2xl 
          shadow-xl 
          w-full 
          max-w-2xl 
          relative  
          md:max-h-[90vh]      
          md:overflow-auto
          max-h-screen         
          h-full
          overflow-y-scroll
          md:h-auto
        "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                <div className="p-6 md:p-10 pt-14">
                    <h2 className="text-2xl font-semibold text-center mb-8">
                        See How It Works
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-800 mb-1.5 text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter full name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-800 mb-1.5 text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* School Name */}
                        <div>
                            <label className="block text-gray-800 mb-1.5 text-sm font-medium">
                                School Name
                            </label>
                            <input
                                type="text"
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                placeholder="Enter school name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Number of Learners */}
                        <div>
                            <label className="block text-gray-800 mb-1.5 text-sm font-medium">
                                Number Of Learners
                            </label>
                            <input
                                type="text"
                                name="numberOfLearners"
                                value={formData.numberOfLearners}
                                onChange={handleChange}
                                placeholder="Add number of learners"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* School Role */}
                        <div>
                            <label className="block text-gray-800 mb-1.5 text-sm font-medium">
                                School Role
                            </label>
                            <select
                                name="schoolRole"
                                value={formData.schoolRole}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            >
                                <option value="">
                                    Select your school role
                                </option>
                                <option value="principal">Principal</option>
                                <option value="teacher">Teacher</option>
                                <option value="administrator">
                                    Administrator
                                </option>
                                <option value="parent">Parent</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                    className="w-4 h-4 accent-blue-600"
                                />
                                <span className="text-gray-800 text-sm font-medium">
                                    Information Send video
                                </span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className="w-4 h-4 accent-blue-600"
                                    required
                                />
                                <span className="text-gray-800 text-sm font-medium">
                                    Appointment
                                </span>
                            </label>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
                w-full 
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                font-medium 
                py-4 
                rounded-full 
                transition-all 
                mt-4
                text-center
              "
                        >
                            Confirm Appointment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SeeHowItWorksModal;
