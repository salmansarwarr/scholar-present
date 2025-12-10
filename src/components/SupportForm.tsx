import { useState } from 'react';
import { Calendar, Users, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

const SupportForm = () => {
  const [selectedOption, setSelectedOption] = useState('support');
  const [agreedToContact, setAgreedToContact] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: selectedOption, agreedToContact });
  };

  return (
    <div className="max-w-[970px] xl:w-[970px] sm:rounded-2xl mx-auto px-5 py-6 mt-8 lg:my-0 bg-white shadow border-y border-[#0E0C151A]">
      <h1 className="text-[24px] font-bold mb-4">How can we help?</h1>
      
      {/* Option Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-4 ">
        {/* Support Helpdesk */}
        <button
          onClick={() => setSelectedOption('support')}
          className={`flex items-center justify-between p-4 py-3 rounded-lg border-2 transition-all ${
            selectedOption === 'support'
              ? 'border-[#0066BF]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5" />
            <span>Support helpdesk</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedOption === 'support' ? 'border-[#0066BF]' : 'border-gray-300'
          }`}>
            {selectedOption === 'support' && (
              <div className="w-3 h-3 rounded-full bg-[#0066BF]"></div>
            )}
          </div>
        </button>

        {/* Demo */}
        <button
          onClick={() => setSelectedOption('demo')}
          className={`flex items-center justify-between p-4 py-3 rounded-xl border-2 transition-all ${
            selectedOption === 'demo'
              ? 'border-[#0066BF]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5" />
            <span>Demo</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedOption === 'demo' ? 'border-[#0066BF]' : 'border-gray-300'
          }`}>
            {selectedOption === 'demo' && (
              <div className="w-3 h-3 rounded-full bg-[#0066BF]"></div>
            )}
          </div>
        </button>

        {/* Become a Partner */}
        <button
          onClick={() => setSelectedOption('partner')}
          className={`flex items-center justify-between p-4 py-3 rounded-xl border-2 transition-all ${
            selectedOption === 'partner'
              ? 'border-[#0066BF]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5" />
            <span>Become a partner</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedOption === 'partner' ? 'border-[#0066BF]' : 'border-gray-300'
          }`}>
            {selectedOption === 'partner' && (
              <div className="w-3 h-3 rounded-full bg-[#0066BF]"></div>
            )}
          </div>
        </button>

        {/* General Enquiries */}
        <button
          onClick={() => setSelectedOption('enquiries')}
          className={`flex items-center justify-between p-4 py-3 rounded-xl border-2 transition-all ${
            selectedOption === 'enquiries'
              ? 'border-[#0066BF]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5" />
            <span>General enquiries</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedOption === 'enquiries' ? 'border-[#0066BF]' : 'border-gray-300'
          }`}>
            {selectedOption === 'enquiries' && (
              <div className="w-3 h-3 rounded-full bg-[#0066BF]"></div>
            )}
          </div>
        </button>
      </div>

      {/* Response Time Notice */}
      <div className="flex items-center gap-2 text-[#65676C] mb-4">
        <Clock className="w-5 h-5" />
        <span>First response within 4 business hours</span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 mb-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g., Mrs Mokoena"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@school.co.za"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+27..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          {/* School/Organization */}
          <div>
            <label className="block text-sm font-medium mb-2">School / Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="e.g., Naledi Primary"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Describe the issue, steps taken, and any links/screenshots."
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
          />
        </div>

        {/* Checkbox and Submit */}
        <div className="flex flex-col  gap-4 justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={agreedToContact}
                onChange={(e) => setAgreedToContact(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-900 rounded-full peer peer-checked:bg-gray-900 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-6"></div>
            </div>
            <span className="text-sm">I agree to be contacted about this request.</span>
          </label>

          <button
            type="submit"
            className="px-8 w-full py-3 bg-[#0066BF] text-white font-medium rounded-full transition-colors"
          >
            Let's Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportForm;