const HowItWorksSection = () => {
  const benefits = [
    {
      number: 1,
      title: 'All teachers can capture their class attendance simultaneously',
      description: 'Scholar Present Step Functions tracks the state of each step, so you can automatically retry failed or timed-out tasks, catch specific errors, and recover gracefully, whether the task takes seconds or months to complete.'
    },
    {
      number: 2,
      title: 'Data is securely stored and it is backup up daily',
      description: 'Scholar Present Step Functions tracks the state of each step, so you can automatically retry failed or timed-out tasks, catch specific errors, and recover gracefully, whether the task takes seconds or months to'
    }
  ];

  return (
    <div className=" mx-auto shadow bg-white p-6 lg:rounded-2xl">
      {/* Header */}
      <h2 className="text-[32px] font-bold text-[#0E0C15] mb-4">
        How it Works
      </h2>

      {/* Image */}
      <div className="mb-4">
        <img 
          src="/library.png" 
          alt="Library shelves" 
          className="w-full h-56 lg:h-[586px] object-cover rounded-2xl"
        />
      </div>

      {/* Benefits Section */}
      <h3 className="text-[32px] font-bold text-[#0E0C15] mb-4">
        Benefits and features
      </h3>

      {/* Benefits List */}
      <div className="space-y-8">
        {benefits.map((benefit) => (
          <div key={benefit.number}>
            <h4 className="text-[20px] font-bold text-[#17102F] mb-3">
              {benefit.number}. {benefit.title}
            </h4>
            <p className="text-[#65676C] text-[16px] leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;