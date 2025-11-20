import { skills } from "../../data/aboutskills";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-br from-gray-950 to-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
            Building Websites That
            <span className="block text-blue-500">
              Convert Visitors into Customers
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I help businesses create fast, beautiful, and strategic websites
            designed to drive growth and deliver real results.
          </p>
        </div>

        <div className="text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                Is your current website failing to generate the leads and sales
                your business deserves? I help ambitious business owners solve
                that problem by creating digital experiences that work 24/7 to
                attract and engage the right customers.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                I go beyond just writing code. I partner with you to understand
                your goals and create a digital asset that becomes your
                hardest-working employee.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[auto_1fr] gap-x-3 group p-4 rounded-lg bg-gray-900/40 border border-gray-800 hover:border-blue-600 transition-all duration-300 items-start"
                  >
                    <div className="shrink-0">
                      <IconComponent className="h-7 w-7 text-blue-500 group-hover:text-blue-400 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200 mb-1">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
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
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
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
