import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, AtSign } from "lucide-react";

export const Contact = () => {
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
    const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
    const githubUrl = import.meta.env.VITE_GITHUB_URL;
    const emailUrl = import.meta.env.VITE_CONTACT_EMAIL;

    const contactMethods = [
        {
            icon: <Mail className="text-cyan-500" size={24} />,
            title: "Email",
            value: emailUrl || "sahiru.deshan@example.com",
            action: `mailto:${emailUrl || "sahiru.deshan@example.com"}`,
            color: "from-cyan-500 to-blue-600"
        },
        {
            icon: <Phone className="text-green-500" size={24} />,
            title: "WhatsApp",
            value: "+94 71 234 5678",
            action: whatsappUrl || "#",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: <MapPin className="text-purple-500" size={24} />,
            title: "Location",
            value: "Colombo, Sri Lanka",
            action: "#",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: <Clock className="text-orange-500" size={24} />,
            title: "Available",
            value: "Mon - Fri, 9AM - 6PM",
            action: "#",
            color: "from-orange-500 to-red-600"
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin className="text-2xl" />,
            name: "LinkedIn",
            url: linkedinUrl || "#",
            color: "from-blue-600 to-blue-700",
            hoverColor: "hover:from-blue-500 hover:to-blue-600"
        },
        {
            icon: <FaGithub className="text-2xl" />,
            name: "GitHub",
            url: githubUrl || "#",
            color: "from-gray-700 to-gray-800",
            hoverColor: "hover:from-gray-600 hover:to-gray-700"
        },
        {
            icon: <FaWhatsapp className="text-2xl" />,
            name: "WhatsApp",
            url: whatsappUrl || "#",
            color: "from-green-600 to-green-700",
            hoverColor: "hover:from-green-500 hover:to-green-600"
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            name: "Email",
            url: `mailto:${emailUrl || "sahiru.deshan@example.com"}`,
            color: "from-red-600 to-red-700",
            hoverColor: "hover:from-red-500 hover:to-red-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md py-12 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
                        📞 Let's Connect
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to start a conversation? I'm always excited to discuss new opportunities, 
                        collaborations, or just chat about technology and development.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color}`}>
                                            {method.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                                            <p className="text-gray-300">{method.value}</p>
                                        </div>
                                        {method.action !== "#" && (
                                            <motion.a
                                                href={method.action}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                                            >
                                                <Send size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">🌐 Connect on Social Media</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`bg-gradient-to-r ${social.color} ${social.hoverColor} text-white p-4 rounded-2xl text-center transition-all duration-300 border border-white/20 hover:border-white/40`}
                                    >
                                        <div className="text-center">
                                            <div className="text-white mb-2">{social.icon}</div>
                                            <span className="text-sm font-medium">{social.name}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-6 text-center"
                        >
                            <div className="text-4xl mb-3">💡</div>
                            <h3 className="text-xl font-bold text-white mb-2">Quick Response Time</h3>
                            <p className="text-cyan-300 text-sm">I typically respond within 24 hours</p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">✍️ Send Me a Message</h3>
                        
                        <form className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        Your Name
                                    </div>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-gray-700/50 border border-gray-600/30 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Sahiru Deshan"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    <div className="flex items-center gap-2">
                                        <AtSign size={16} />
                                        Your Email
                                    </div>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-gray-700/50 border border-gray-600/30 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                    placeholder="you@example.com"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    <div className="flex items-center gap-2">
                                        <MessageCircle size={16} />
                                        Message
                                    </div>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    required
                                    className="w-full bg-gray-700/50 border border-gray-600/30 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>

                        {/* Form Note */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="text-center text-gray-400 text-sm mt-4"
                        >
                            💡 Feel free to reach out for collaborations, job opportunities, or just to chat about tech!
                        </motion.p>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            🚀 Ready to Start Something Amazing?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Whether it's a project collaboration, career opportunity, or just a friendly chat about technology, 
                            I'm always excited to connect with fellow developers and innovators.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="/projects"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href="/skills"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50"
                            >
                                Check My Skills
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
