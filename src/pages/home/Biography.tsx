import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Trophy, Award, BookOpen, Users, Zap } from "lucide-react";

const Biography: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const timeline = [
        {
            year: "2025 - Present",
            title: "Top-up Degree in Computer Science at University of Greater Manchester",
            icon: <Rocket className="text-white" size={20} />,
            description: "Currently reading for a top-up degree in Computer Science at the University of Greater Manchester.",
            highlight: true,
            color: "from-blue-500 to-cyan-600",
            achievements: ["Advanced Computer Science", "University Level Education", "International Experience"]
        },
        {
            year: "2022 - 2025",
            title: "Graduation Diploma in Software Engineering at IJSE",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Completed the Graduation Diploma in Software Engineering (GDSE) at IJSE.",
            color: "from-purple-500 to-pink-600",
            achievements: ["Advanced Java Development", "Software Architecture", "Database Design", "Full-Stack Development"]
        },
        {
            year: "2021 - 2022",
            title: "Diploma in Software Engineering at NIBM",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Completed a diploma in software engineering at the National Institute of Business Management (NIBM).",
            color: "from-green-500 to-emerald-600",
            achievements: ["Web Development", "Programming Fundamentals", "Project Management", "Software Engineering Basics"]
        },
        {
            year: "2020",
            title: "Advanced Level Exam - Maths Stream",
            icon: <BookOpen className="text-white" size={20} />,
            description: "Attempted Advanced Level examination in the Maths stream.",
            color: "from-orange-500 to-red-600",
            achievements: ["Mathematics", "Physics", "Chemistry"]
        },
        {
            year: "2017",
            title: "Advanced Level Exam - Commerce Stream",
            icon: <Users className="text-white" size={20} />,
            description: "Completed Advanced Level examination in the Commerce stream.",
            color: "from-indigo-500 to-purple-600",
            achievements: ["Business Studies", "Economics", "Accounting"]
        },
        {
            year: "2014",
            title: "Ordinary Level Exam",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Completed Ordinary Level examination.",
            color: "from-yellow-500 to-orange-600",
            achievements: ["Core Subjects", "Academic Foundation", "Basic Education"]
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
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-none sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 sm:mb-6">
                    🚀 My Journey
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                    From student to developer, every step has shaped my passion for technology and innovation
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Main Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2"
                >
                    <div className="relative pl-4 sm:pl-8 before:absolute before:top-0 before:left-3 sm:before:left-6 before:w-1 before:h-full before:bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 before:rounded-full">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative mb-8 sm:mb-12 flex flex-col sm:flex-row items-start gap-3 sm:gap-6"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 mt-2 shadow-xl
                                        border-4 border-white/50 z-10 bg-gradient-to-tr ${item.color} ring-2 ring-white/30`}
                                >
                                    {item.icon}
                                </motion.div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-500/50"
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
                                        <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                                        <span className="text-xs sm:text-sm text-cyan-400 font-semibold bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full self-start">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                                    
                                    {/* Achievements */}
                                    <div className="space-y-2">
                                        {item.achievements?.map((achievement, index) => (
                                            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
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
                                className="relative mb-8 sm:mb-12 flex flex-col sm:flex-row items-start gap-3 sm:gap-6"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-600 flex items-center justify-center shadow-xl mt-2 border-4 border-white/50 z-10 ring-2 ring-white/30">
                                    <Trophy className="text-white" size={18} />
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 p-4 sm:p-6 rounded-2xl shadow-xl">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">🏆 Competition Highlights</h3>
                                    <div className="grid gap-3 sm:gap-4">
                                        {competitions.map((comp, i) => (
                                            <div key={i} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-700/30 rounded-lg">
                                                {comp.icon}
                                                <div className="flex-1">
                                                    <div className="text-sm sm:text-base font-semibold text-white">{comp.name}</div>
                                                    <div className="text-xs sm:text-sm text-gray-400">{comp.achievement} • {comp.year}</div>
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
                    className="space-y-4 sm:space-y-6"
                >
                    {/* Soft Skills */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-4 sm:p-6 shadow-xl">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">💪 Soft Skills</h3>
                        <div className="space-y-3 sm:space-y-4">
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
                                            <span className="text-white text-xs sm:text-sm font-medium">{skill.name}</span>
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
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-4 sm:p-6 shadow-xl">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">📊 Quick Stats</h3>
                        <div className="space-y-3 sm:space-y-4">
                            {[
                                { label: "Education Years", value: "11+", color: "text-cyan-400" },
                                { label: "Current Level", value: "University", color: "text-purple-400" },
                                { label: "Projects Completed", value: "15+", color: "text-green-400" },
                                { label: "Technologies", value: "8+", color: "text-orange-400" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex justify-between items-center p-2 sm:p-3 bg-gray-700/30 rounded-lg"
                                >
                                    <span className="text-gray-300 text-xs sm:text-sm">{stat.label}</span>
                                    <span className={`font-bold text-base sm:text-lg ${stat.color}`}>{stat.value}</span>
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
                        className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-4 sm:p-6 shadow-xl text-center"
                    >
                        <div className="text-3xl sm:text-4xl mb-3">💡</div>
                        <p className="text-white text-sm sm:text-base font-medium mb-2">"Every line of code is a step toward innovation"</p>
                        <p className="text-cyan-300 text-xs sm:text-sm">- Sahiru Deshan</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Biography;
