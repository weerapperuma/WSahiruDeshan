import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import About from "./home/About.tsx";
import Biography from "./home/Biography.tsx";
import { Projects } from "./Projects.tsx";

export const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const blurIntensity = Math.min(scrollY / 100, 1);

    return (
        <div className="relative">
            {/* Background */}
            <div
                className="fixed top-0 left-0 w-full h-screen z-0 flex items-center justify-center transition-all duration-300"
                style={{
                    backdropFilter: `blur(${blurIntensity * 10}px)`,
                    opacity: 1 - blurIntensity * 0.5,
                    background: "linear-gradient(to bottom right, #1e3a8a, #2563eb)",
                }}
            >
                {/* Hero Content */}
                <motion.div
                    className="text-center text-white p-8 rounded-2xl max-w-3xl backdrop-blur-md bg-white/10 shadow-xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Sahiru
                        </span>
                    </h1>

                    <TypeAnimation
                        sequence={[
                            "a Passionate Developer",
                            2000,
                            "a Backend Enthusiast",
                            2000,
                            "a Code Explorer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-xl sm:text-2xl text-gray-200 font-light"
                    />

                    <motion.div
                        className="animate-bounce text-4xl mt-8 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </div>

            {/* Scrollable Sections */}
            <div className="relative z-10">
                <div className="h-screen" />
                <About />
                <Biography />
                <Projects />
            </div>
        </div>
    );
};
