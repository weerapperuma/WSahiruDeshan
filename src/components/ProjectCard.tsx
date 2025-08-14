import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Play } from "lucide-react";

interface ProjectCardProps {
    image: string;
    video: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
}

// Map all assets into an object, eager-loaded
const images: Record<string, string> = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    import: 'default',
});

// Extract filename and find its URL
const getImage = (imagePath: string): string => {
    const fileName = imagePath.split('/').pop(); // get "movie-site.png"
    const key = `../assets/${fileName}`;
    return images[key] || ''; // fallback if image not found
};

export const ProjectCard = ({
    image,
    video,
    title,
    description,
    tech,
    github,
}: ProjectCardProps) => {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
            <motion.div 
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col h-[520px] group"
                whileHover={{ y: -10 }}
            >
                {/* Image Area */}
                <div className="relative h-[280px] w-full overflow-hidden">
                    <img
                        src={getImage(image)}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowPreview(true)}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                            <Play size={24} fill="currentColor" />
                        </motion.button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                    {/* Title */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {tech.map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="text-xs font-medium px-3 py-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-cyan-300 rounded-full border border-gray-600/30 hover:border-cyan-500/50 transition-all duration-300"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowPreview(true)}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
                        >
                            <Play size={16} />
                            Preview
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50"
                        >
                            <Github size={16} />
                            Code
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Preview Video Modal */}
            {showPreview && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    onClick={() => setShowPreview(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-gray-900 rounded-2xl overflow-hidden w-full max-w-5xl relative border border-gray-600/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowPreview(false)}
                                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
                            >
                                ✕
                            </motion.button>
                        </div>

                        {/* Video */}
                        <div className="relative w-full pt-[56.25%]">
                            <iframe
                                src={video}
                                title={title}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {tech.slice(0, 3).map((item, index) => (
                                        <span
                                            key={index}
                                            className="text-xs font-medium px-3 py-1 bg-gray-800 text-cyan-300 rounded-full border border-gray-600"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300"
                                >
                                    <Github size={16} />
                                    View Source
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};
