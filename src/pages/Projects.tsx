import projects from "../data/projects.json";
import {ProjectCard} from "../components/ProjectCard";

export const Projects = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-10 bg-gradient-to-br from-white to-gray-100">
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
                {/* Add more cards like this */}
            </div>
        </section>
    );
};
