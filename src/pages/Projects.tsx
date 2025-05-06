import projects from "../data/projects.json";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 pt-32 pb-10">
            <div className="max-w-6xl mx-auto">

                {/* Title Section */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        🚀 My Top Projects
                    </h2>
                    <p className="mt-2 text-gray-500 text-base">
                        A collection of work I’m most proud of
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>
    );
};
