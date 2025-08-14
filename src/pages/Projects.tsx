import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => 
            project.tech.some(tech => 
                tech.toLowerCase().includes(selectedCategory.toLowerCase())
            )
        );

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
                    🚀 Featured Projects
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A showcase of innovative solutions and creative implementations that demonstrate my technical expertise
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl"
                                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30"
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Project Count */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <span className="text-gray-400">
                    Showing <span className="text-cyan-400 font-semibold">{filteredProjects.length}</span> of <span className="text-cyan-400 font-semibold">{projects.length}</span> projects
                </span>
            </motion.div>

            {/* Project Grid */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group"
                    >
                        <ProjectCard
                            image={project.image}
                            video={project.video}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        💡 Have a Project in Mind?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                    >
                        Let's Discuss Your Project
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};
