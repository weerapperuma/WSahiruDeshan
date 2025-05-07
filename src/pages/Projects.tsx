import projects from "../data/projects.json";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white/30 to-white/70 py-20 px-6 sm:px-8 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl p-10">
                {/* Title Section */}
                <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
                    🚀 My Top Projects
                </h1>
                <p className="text-center text-gray-700 text-lg mb-10 leading-relaxed">
                    A collection of work I’m most proud of — crafted with passion and precision.
                </p>

                {/* Project Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            video={project.video}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
