import { contacts } from "../../data/contact";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const iconMap = {
  email: <MdEmail className="h-6 w-6 text-blue-500" />,
  phone: <MdPhone className="h-6 w-6 text-blue-500" />,
  linkedin: <FaLinkedin className="h-6 w-6 text-blue-500" />,
  github: <FaGithub className="h-6 w-6 text-blue-500" />,
  twitter: <FaTwitter className="h-6 w-6 text-blue-500" />,
};

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-gray-950 to-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-md hover:shadow-xl 
                         transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="shrink-0 mr-4">
                <div className="p-3 rounded-full bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300">
                  {iconMap[contact.type]}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {contact.label}
                </h3>
                <p className="text-gray-400">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
