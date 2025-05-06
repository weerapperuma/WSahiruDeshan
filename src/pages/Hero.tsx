import About from "./home/About.tsx";
import Biography from "./home/Biography.tsx";
import { Projects } from "./Projects.tsx";

export const Hero = () => {
    return (
        <div>
            <section className="flex items-center justify-center min-h-screen px-4">
                <div className="text-center bg-white/70 p-6 rounded-2xl shadow-xl max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                        Hi, I'm Sahiru — a Passionate Developer
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Scroll to explore my work & experience
                    </p>
                    <div className="animate-bounce text-2xl text-gray-600">↓</div>
                </div>
            </section>
            <About/>
            <Biography/>
            <Projects/>
        </div>
    );
};
