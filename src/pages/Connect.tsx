import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
    const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
    const githubUrl = import.meta.env.VITE_GITHUB_URL;
    const emailUrl = import.meta.env.VITE_CONTACT_EMAIL;
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-100 to-white px-4 py-12">
            <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                       className="text-sky-600 hover:text-sky-800 text-3xl transition-all">
                        <FaLinkedin />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                       className="text-green-500 hover:text-green-700 text-3xl transition-all">
                        <FaWhatsapp />
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                       className="text-gray-800 hover:text-black text-3xl transition-all">
                        <FaGithub />
                    </a>
                    <a
                        href={`mailto:${emailUrl}`}
                        className="text-red-500 hover:text-red-700 text-3xl transition-all"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Contact Form */}
                <form
                    className="space-y-6"
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            className="mt-1 w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Sahiru Deshan"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="mt-1 w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            className="mt-1 w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
