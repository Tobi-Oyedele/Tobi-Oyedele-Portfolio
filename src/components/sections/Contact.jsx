import { contacts } from "../../data/contact";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "motion/react";
import { Send, MessageSquare } from "lucide-react";

const iconMap = {
  email: <MdEmail className="h-5 w-5" />,
  phone: <MdPhone className="h-5 w-5" />,
  linkedin: <FaLinkedin className="h-5 w-5" />,
  github: <FaGithub className="h-5 w-5" />,
  twitter: <FaTwitter className="h-5 w-5" />,
  instagram: <FaInstagram className="h-5 w-5" />,
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let's create something extraordinary.
            </h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-6 p-8 bento-item group"
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                  {iconMap[contact.type]}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-main/40 mb-1">{contact.label}</h4>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors break-all leading-tight">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
