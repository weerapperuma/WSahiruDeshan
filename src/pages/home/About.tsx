import { motion } from "framer-motion";
import { Code, Database, Palette, Fish, Coffee, BookOpen } from "lucide-react";

const About = () => {
    const skills = [
        { name: "Java & Spring Boot", level: 90, icon: <Database className="text-blue-500" size={20} />, color: "from-blue-500 to-blue-600" },
        { name: "React & TypeScript", level: 85, icon: <Code className="text-cyan-500" size={20} />, color: "from-cyan-500 to-cyan-600" },
        { name: "Tailwind CSS", level: 88, icon: <Palette className="text-purple-500" size={20} />, color: "from-purple-500 to-purple-600" },
        { name: "Node.js & Express", level: 75, icon: <Code className="text-green-500" size={20} />, color: "from-green-500 to-green-600" },
    ];

    const interests = [
        { icon: <Fish className="text-blue-600" size={24} />, title: "Monster Fish", desc: "Building complex aquarium ecosystems" },
        { icon: <Coffee className="text-amber-600" size={24} />, title: "Coffee Culture", desc: "Exploring different brewing methods" },
        { icon: <BookOpen className="text-emerald-600" size={24} />, title: "Tech Books", desc: "Always learning new technologies" },
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-none sm:rounded-3xl shadow-2xl p-6 sm:p-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
                    About Me
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A passionate software engineer who believes in creating elegant solutions to complex problems
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Profile & Description */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Profile Card */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                className="relative mb-6"
                            >
                                <img
                                    src="/Circleedge.jpg"
                                    alt="Sahiru Deshan"
                                    className="w-40 h-40 rounded-full border-4 border-cyan-500 shadow-2xl"
                                />
                                <motion.div
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <span className="text-white text-sm">✨</span>
                                </motion.div>
                            </motion.div>
                            
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Sahiru Deshan
                            </h2>
                            <p className="text-lg text-cyan-400 font-semibold mb-4">
                                Full-Stack Developer
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I'm a dedicated software engineering student passionate about backend systems and smart design. 
                                Currently focused on Java with Spring Boot and scalable APIs, while diving deep into front-end 
                                tools like React, TypeScript, and Tailwind CSS.
                            </p>
                        </div>
                    </div>

                    {/* Interests Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="text-3xl mb-2">{interest.icon}</div>
                                <h3 className="font-semibold text-white mb-1">{interest.title}</h3>
                                <p className="text-sm text-gray-400">{interest.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Skills & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Skills Section */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                            Technical Skills
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-y-2"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {skill.icon}
                                            <span className="text-white font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { number: "3+", label: "Years Experience", color: "from-cyan-500 to-blue-600" },
                            { number: "15+", label: "Projects Built", color: "from-purple-500 to-pink-600" },
                            { number: "5+", label: "Technologies", color: "from-green-500 to-emerald-600" },
                            { number: "100%", label: "Passion", color: "from-orange-500 to-red-600" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 text-center hover:border-gray-500/50 transition-all duration-300"
                            >
                                <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                        >
                            Let's Work Together
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
