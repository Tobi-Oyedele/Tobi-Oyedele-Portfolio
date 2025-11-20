import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const skills = [
    {
      name: "Performance & SEO",
      description:
        "Lightning-fast load times and clean code for better search rankings",
      icon: RocketLaunchIcon,
    },
    {
      name: "Responsive Design",
      description:
        "Flawless experiences on all devices, from mobile to desktop",
      icon: DevicePhoneMobileIcon,
    },
    {
      name: "Clean Code",
      description: "Modern, maintainable code that scales with your business",
      icon: CodeBracketIcon,
    },
    {
      name: "Clear Communication",
      description: "Regular updates and collaboration throughout the process",
      icon: ChatBubbleLeftRightIcon,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Websites That
            <span className="block">Convert Visitors into Customers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I help businesses create fast, beautiful, and strategic websites
            designed to drive growth and deliver real results.
          </p>
        </div>

        <div className="text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Is your current website failing to generate the leads and sales
                your business deserves? I help ambitious business owners solve
                that problem by creating digital experiences that work 24/7 to
                attract and engage the right customers.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I go beyond just writing code. I partner with you to understand
                your goals and create a digital asset that becomes your
                hardest-working employee.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group p-4 rounded-lg"
                  >
                    <div className="shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Let's Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
