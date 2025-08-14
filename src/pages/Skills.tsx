import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CertificationCard from "../components/CertificationCard.tsx";
import { Code, Database, Globe, Palette, Cpu, Zap, Shield, Rocket, Coffee, Leaf, Database as DbIcon, GitBranch } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="text-cyan-500" size={32} />,
            color: "from-cyan-500 to-blue-600",
            skills: [
                { name: "Java", icon: "☕", level: 95, description: "Advanced Java development with Spring Boot" },
                { name: "Python", icon: "🐍", level: 85, description: "Data analysis and automation scripting" },
                { name: "JavaScript", icon: "🟨", level: 90, description: "Modern ES6+ and async programming" },
                { name: "TypeScript", icon: "📘", level: 88, description: "Type-safe JavaScript development" }
            ]
        },
        {
            title: "Frontend Development",
            icon: <Palette className="text-purple-500" size={32} />,
            color: "from-purple-500 to-pink-600",
            skills: [
                { name: "React", icon: "⚛️", level: 90, description: "Component-based UI development" },
                { name: "Tailwind CSS", icon: "🎨", level: 92, description: "Utility-first CSS framework" },
                { name: "HTML/CSS", icon: "🌐", level: 95, description: "Semantic markup and styling" },
                { name: "Vite", icon: "⚡", level: 85, description: "Fast build tool and dev server" }
            ]
        },
        {
            title: "Backend Development",
            icon: <Database className="text-blue-500" size={32} />,
            color: "from-blue-500 to-cyan-600",
            skills: [
                { name: "Spring Boot", icon: "🍃", level: 92, description: "Enterprise Java applications" },
                { name: "Node.js", icon: "🟢", level: 85, description: "Server-side JavaScript runtime" },
                { name: "Express.js", icon: "🚀", level: 80, description: "Web application framework" },
                { name: "REST APIs", icon: "🔌", level: 90, description: "API design and development" }
            ]
        },
        {
            title: "Database & Tools",
            icon: <Cpu className="text-green-500" size={32} />,
            color: "from-green-500 to-emerald-600",
            skills: [
                { name: "MySQL", icon: "🐬", level: 88, description: "Relational database management" },
                { name: "MongoDB", icon: "🍃", level: 75, description: "NoSQL document database" },
                { name: "Git", icon: "📚", level: 92, description: "Version control and collaboration" },
                { name: "Docker", icon: "🐳", level: 70, description: "Containerization and deployment" }
            ]
        }
    ];

    const softSkills = [
        { name: "Problem Solving", level: 95, icon: <Zap className="text-yellow-500" size={20} /> },
        { name: "Team Leadership", level: 88, icon: <Shield className="text-blue-500" size={20} /> },
        { name: "Communication", level: 92, icon: <Globe className="text-green-500" size={20} /> },
        { name: "Adaptability", level: 90, icon: <Rocket className="text-purple-500" size={20} /> },
        { name: "Time Management", level: 87, icon: <Coffee className="text-orange-500" size={20} /> },
        { name: "Continuous Learning", level: 94, icon: <Leaf className="text-emerald-500" size={20} /> }
    ];

    const certificates = [
        {
            image: "/certificate_Build Job-Winning MERN & React Projects to Land Dream Jobs.jpg",
            title: "MERN Stack Development",
            issuer: "Udemy",
            year: "2024",
            description: "Full-stack development with MongoDB, Express, React, and Node.js"
        },
        {
            image: "/certificate_Python Bootcamp-Beginner to Master Programming.jpg",
            title: "Python Programming",
            issuer: "Udemy",
            year: "2023",
            description: "Comprehensive Python programming from basics to advanced concepts"
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
                        🚀 Skills & Expertise
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A comprehensive showcase of my technical skills, soft skills, and professional certifications
                    </p>
                </motion.div>

                {/* Skill Categories Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color}`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                            </div>
                            
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <div>
                                                    <span className="text-white font-medium">{skill.name}</span>
                                                    <p className="text-gray-400 text-xs">{skill.description}</p>
                                                </div>
                                            </div>
                                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                                className={`h-2 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 shadow-xl mb-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">💪 Soft Skills & Personal Development</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gray-700/30 rounded-2xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {skill.icon}
                                    <span className="text-white font-semibold">{skill.name}</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Proficiency</span>
                                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                            className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">🏆 Professional Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm mb-1">Issued by {cert.issuer}</p>
                                    <p className="text-cyan-400 text-sm font-semibold">{cert.year}</p>
                                </div>
                                <p className="text-gray-300 text-center mb-4">{cert.description}</p>
                                <CertificationCard imageUrl={cert.image} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            💡 Ready to See These Skills in Action?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Explore my projects to see how I apply these skills to create real-world solutions.
                        </p>
                        <Link
                            to="/projects"
                            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                        >
                            View My Projects →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
