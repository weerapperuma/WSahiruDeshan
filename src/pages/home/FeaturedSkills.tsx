import { motion } from "framer-motion";
import { Code, Database, Globe, Palette, Cpu, Zap, Shield, Rocket } from "lucide-react";

const FeaturedSkills = () => {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Database className="text-blue-500" size={32} />,
            color: "from-blue-500 to-cyan-600",
            skills: [
                { name: "Java", level: 95, icon: "☕" },
                { name: "Spring Boot", level: 90, icon: "🍃" },
                { name: "Node.js", level: 85, icon: "🟢" },
                { name: "Express.js", level: 80, icon: "⚡" }
            ]
        },
        {
            title: "Frontend Development",
            icon: <Palette className="text-purple-500" size={32} />,
            color: "from-purple-500 to-pink-600",
            skills: [
                { name: "React", level: 88, icon: "⚛️" },
                { name: "TypeScript", level: 85, icon: "📘" },
                { name: "Tailwind CSS", level: 90, icon: "🎨" },
                { name: "HTML/CSS", level: 95, icon: "🌐" }
            ]
        },
        {
            title: "Database & Tools",
            icon: <Cpu className="text-green-500" size={32} />,
            color: "from-green-500 to-emerald-600",
            skills: [
                { name: "MySQL", level: 85, icon: "🐬" },
                { name: "MongoDB", level: 75, icon: "🍃" },
                { name: "Git", level: 90, icon: "📚" },
                { name: "Docker", level: 70, icon: "🐳" }
            ]
        },
        {
            title: "Soft Skills",
            icon: <Zap className="text-yellow-500" size={32} />,
            color: "from-yellow-500 to-orange-600",
            skills: [
                { name: "Problem Solving", level: 95, icon: "🧩" },
                { name: "Team Leadership", level: 88, icon: "👥" },
                { name: "Communication", level: 92, icon: "💬" },
                { name: "Adaptability", level: 90, icon: "🔄" }
            ]
        }
    ];

    const technologies = [
        { name: "Java", icon: "☕", color: "bg-orange-500" },
        { name: "Spring", icon: "🍃", color: "bg-green-500" },
        { name: "React", icon: "⚛️", color: "bg-blue-500" },
        { name: "TypeScript", icon: "📘", color: "bg-blue-600" },
        { name: "Tailwind", icon: "🎨", color: "bg-cyan-500" },
        { name: "Node.js", icon: "🟢", color: "bg-green-600" },
        { name: "MySQL", icon: "🐬", color: "bg-blue-700" },
        { name: "Git", icon: "📚", color: "bg-orange-600" }
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
                    🚀 Technical Arsenal
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A comprehensive toolkit of technologies and skills that power my development journey
                </p>
            </motion.div>

            {/* Skill Categories Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
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
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-y-2"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <span className="text-white font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Technology Stack */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold text-white mb-8">
                    🛠️ Technology Stack
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-4 text-center hover:border-gray-500/50 transition-all duration-300">
                                <div className={`w-12 h-12 ${tech.color} rounded-full flex items-center justify-center mx-auto mb-3 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                    {tech.icon}
                                </div>
                                <p className="text-white text-sm font-medium">{tech.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Learning Path */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        📚 Current Learning Path
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Always expanding my knowledge with the latest technologies and best practices
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { 
                            title: "Advanced Java", 
                            description: "Deep diving into Spring Security, Microservices, and Cloud Native development",
                            icon: <Shield className="text-green-500" size={24} />,
                            progress: 75
                        },
                        { 
                            title: "React Ecosystem", 
                            description: "Exploring Next.js, Redux Toolkit, and advanced React patterns",
                            icon: <Rocket className="text-blue-500" size={24} />,
                            progress: 60
                        },
                        { 
                            title: "DevOps & Cloud", 
                            description: "Learning Docker, Kubernetes, and AWS deployment strategies",
                            icon: <Globe className="text-purple-500" size={24} />,
                            progress: 40
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/30 rounded-2xl p-6 border border-gray-600/30"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Progress</span>
                                    <span className="text-cyan-400 font-semibold">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.progress}%` }}
                                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <motion.a
                    href="/skills"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl font-semibold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                >
                    Explore Full Skillset →
                </motion.a>
            </motion.div>
        </div>
    );
};

export default FeaturedSkills;
