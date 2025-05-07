import { useEffect, useState } from "react";
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

    const blurIntensity = Math.min(scrollY / 100, 1); // max 1

    return (
        <div className="relative">
            {/* Fixed Beautiful Hero Background */}
            <div
                className="fixed top-0 left-0 w-full h-screen z-0 flex items-center justify-center transition-all duration-300"
                style={{
                    backdropFilter: `blur(${blurIntensity * 10}px)`,
                    opacity: 1 - blurIntensity * 0.5,
                    background: "linear-gradient(to bottom right, #1e3a8a, #2563eb)", // Blue gradient
                }}
            >
                <div className="text-center text-white p-8 rounded-2xl max-w-3xl backdrop-blur-md bg-white/10 shadow-xl">
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Sahiru</span> — a Passionate Developer
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-200 font-light">
                        Scroll down to explore my journey, projects, and passion for code
                    </p>
                    <div className="animate-bounce text-4xl mt-8 text-white">↓</div>
                </div>

            </div>

            {/* Scrollable Content on Top */}
            <div className="relative z-10">
                <div className="h-screen" /> {/* Empty spacer same height as Hero */}
                <About />
                <Biography />
                <Projects />
            </div>
        </div>
    );
};
