import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Trophy, Award, BookOpen, Users, Zap } from "lucide-react";

const Biography: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const timeline = [
        {
            year: "2023 - Present",
            title: "GDSE Programme at IJSE",
            icon: <Rocket className="text-white" size={20} />,
            description: "Currently participating in the Graduate Diploma in Software Engineering (GDSE) at IJSE.",
            highlight: true,
            color: "from-blue-500 to-cyan-600",
            achievements: ["Advanced Java Development", "Software Architecture", "Database Design"]
        },
        {
            year: "2021 - 2022",
            title: "Diploma in Software Engineering at NIBM",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Completed a diploma in software engineering at the National Institute of Business Management (NIBM).",
            color: "from-purple-500 to-pink-600",
            achievements: ["Web Development", "Programming Fundamentals", "Project Management"]
        },
        {
            year: "2020",
            title: "A/L Exam - Maths Stream",
            icon: <BookOpen className="text-white" size={20} />,
            description: "Attempted Advanced Level examination in the Maths stream with result: S1.",
            color: "from-green-500 to-emerald-600",
            achievements: ["Mathematics", "Physics", "Chemistry"]
        },
        {
            year: "2017",
            title: "A/L Exam - Commerce Stream",
            icon: <Users className="text-white" size={20} />,
            description: "Completed A/Ls in the Commerce stream with results: C1, S1.",
            color: "from-orange-500 to-red-600",
            achievements: ["Business Studies", "Economics", "Accounting"]
        },
        {
            year: "2004 - 2017",
            title: "School Education at Kularathna College, Ambalangoda",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Attended school and passed O/Ls with A3, B1, C5.",
            color: "from-indigo-500 to-purple-600",
            achievements: ["Academic Excellence", "Leadership Skills", "Team Collaboration"]
        },
    ];

    const competitions = [
        { name: "Inovesta", year: "2023", achievement: "Innovation Award", icon: <Trophy className="text-yellow-500" size={20} /> },
        { name: "Circle Edge", year: "2022", achievement: "Technical Excellence", icon: <Award className="text-blue-500" size={20} /> }
    ];

    const skills = [
        { name: "Problem Solving", level: 95, icon: <Zap className="text-yellow-500" size={16} /> },
        { name: "Team Leadership", level: 88, icon: <Users className="text-blue-500" size={16} /> },
        { name: "Communication", level: 92, icon: <BookOpen className="text-green-500" size={16} /> },
        { name: "Adaptability", level: 90, icon: <Rocket className="text-purple-500" size={16} /> }
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
                    🚀 My Journey
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    From student to developer, every step has shaped my passion for technology and innovation
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2"
                >
                    <div className="relative pl-8 before:absolute before:top-0 before:left-6 before:w-1 before:h-full before:bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 before:rounded-full">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative mb-12 flex items-start gap-6"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-2 shadow-xl
                                        border-4 border-white/50 z-10 bg-gradient-to-tr ${item.color} ring-2 ring-white/30`}
                                >
                                    {item.icon}
                                </motion.div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-500/50"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <span className="text-sm text-cyan-400 font-semibold bg-gray-800/50 px-3 py-1 rounded-full">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                                    
                                    {/* Achievements */}
                                    <div className="space-y-2">
                                        {item.achievements?.map((achievement, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                                                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                                {achievement}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Competitions Section */}
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="relative mb-12 flex items-start gap-6"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-600 flex items-center justify-center shadow-xl mt-2 border-4 border-white/50 z-10 ring-2 ring-white/30">
                                    <Trophy className="text-white" size={20} />
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 p-6 rounded-2xl shadow-xl">
                                    <h3 className="text-xl font-bold text-white mb-4">🏆 Competition Highlights</h3>
                                    <div className="grid gap-4">
                                        {competitions.map((comp, i) => (
                                            <div key={i} className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                                                {comp.icon}
                                                <div className="flex-1">
                                                    <div className="font-semibold text-white">{comp.name}</div>
                                                    <div className="text-sm text-gray-400">{comp.achievement} • {comp.year}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Expand Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mt-8"
                    >
                        <motion.button
                            onClick={() => setExpanded(!expanded)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-3 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-full shadow-xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 font-semibold"
                        >
                            {expanded ? "Show Less ▲" : "Read More ▼"}
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Sidebar - Skills & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {/* Soft Skills */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">💪 Soft Skills</h3>
                        <div className="space-y-4">
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
                                        <div className="flex items-center gap-2">
                                            {skill.icon}
                                            <span className="text-white text-sm font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">📊 Quick Stats</h3>
                        <div className="space-y-4">
                            {[
                                { label: "Education Years", value: "19+", color: "text-cyan-400" },
                                { label: "Certifications", value: "5+", color: "text-purple-400" },
                                { label: "Projects Completed", value: "15+", color: "text-green-400" },
                                { label: "Technologies", value: "8+", color: "text-orange-400" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg"
                                >
                                    <span className="text-gray-300 text-sm">{stat.label}</span>
                                    <span className={`font-bold text-lg ${stat.color}`}>{stat.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Motivational Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-xl text-center"
                    >
                        <div className="text-4xl mb-3">💡</div>
                        <p className="text-white font-medium mb-2">"Every line of code is a step toward innovation"</p>
                        <p className="text-cyan-300 text-sm">- Sahiru Deshan</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Biography;
