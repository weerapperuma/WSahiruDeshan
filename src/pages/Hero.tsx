import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, Code, Database, Globe } from "lucide-react";
import About from "./home/About.tsx";
import Biography from "./home/Biography.tsx";
import FeaturedSkills from "./home/FeaturedSkills.tsx";
import { Projects } from "./Projects.tsx";

export const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const blurIntensity = Math.min(scrollY / 100, 1);

    // Floating elements animation
    const floatingElements = [
        { icon: <Code className="text-cyan-400" size={24} />, delay: 0 },
        { icon: <Database className="text-blue-400" size={24} />, delay: 0.5 },
        { icon: <Globe className="text-purple-400" size={24} />, delay: 1 },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Animated Background */}
            <div
                className="fixed top-0 left-0 w-full h-screen z-0 transition-all duration-300"
                style={{
                    backdropFilter: `blur(${blurIntensity * 10}px)`,
                    opacity: 1 - blurIntensity * 0.5,
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 58, 138, 0.8) 0%, rgba(37, 99, 235, 0.6) 50%, rgba(59, 130, 246, 0.4) 100%)`,
                }}
            >
                {/* Floating Elements */}
                {floatingElements.map((element, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-white/20"
                        initial={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            opacity: 0 
                        }}
                        animate={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 8,
                            delay: element.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {element.icon}
                    </motion.div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
                <motion.div
                    className="text-center text-white max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                                Sahiru
                            </span>
                        </h1>
                        
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-200 mb-8">
                            <TypeAnimation
                                sequence={[
                                    "🚀 Full-Stack Developer",
                                    2000,
                                    "⚡ DevOps Engineer",
                                    2000,
                                    "🤖 Machine Learning Problem Solver",
                                    2000,
                                    "💼 Former Intern at STAR Group Katunayaka",
                                    2000,
                                    "🔧 Associate Software Engineer at Softcare",
                                    2000,
                                    "☕ Spring Boot Microservices",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="inline-block"
                            />
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Crafting digital experiences with <span className="text-cyan-400 font-semibold">Java Spring Boot</span>, 
                        <span className="text-blue-400 font-semibold"> React</span>, and 
                        <span className="text-purple-400 font-semibold"> TypeScript</span>. 
                        Building scalable solutions one line at a time.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3"
                        >
                            <Download size={20} />
                            Download CV
                            <motion.div
                                className="w-2 h-2 bg-white rounded-full"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.button>
                        
                        <motion.a
                            href="https://wa.me/94784320108"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                        >
                            <Mail size={20} />
                            Let's Talk
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center gap-6 mb-16"
                    >
                        {[
                            { icon: <Github size={24} />, href: "https://github.com/sahiru-deshan", label: "GitHub" },
                            { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/sahiru-deshan", label: "LinkedIn" },
                            { icon: <Mail size={24} />, href: "mailto:sahiru.deshan@softcare.lk", label: "Email" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="group p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
                                title={social.label}
                            >
                                <div className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {social.icon}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="text-white/40 text-center cursor-pointer group"
                        >
                            <div className="w-8 h-12 border-2 border-white/30 rounded-full mx-auto mb-2 relative">
                                <motion.div
                                    animate={{ y: [0, 16, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1 h-3 bg-white/60 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
                                />
                            </div>
                            <p className="text-xs font-light opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                Scroll to explore
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scrollable Sections */}
            <div className="relative z-10">
                <div className="h-screen" />
                <About />
                <div className="my-8 border-t border-gray-300/20" />
                <Biography />
                <div className="my-8 border-t border-gray-300/20" />
                <FeaturedSkills />
                <div className="my-8 border-t border-gray-300/20" />
                <Projects />
            </div>
        </div>
    );
};
