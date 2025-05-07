import { Link } from "react-router-dom";
import CertificationCard from "../components/CertificationCard.tsx";

const skills = [
    { name: "Java", icon: "fab fa-java" },
    { name: "Python", icon: "fab fa-python" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Vite", icon: "fab fa-vite" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "TypeScript", icon: "fab fa-js" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Spring Boot", icon: "fab fa-java" },
];

const certificates = [
    "/certificate_Build Job-Winning MERN & React Projects to Land Dream Jobs.jpg",
    "/certificate_Python Bootcamp-Beginner to Master Programming.jpg",
];

const Skills = () => {
    return (
        <div className="min-h-screen bg-white/80 py-12 px-6 sm:px-8 backdrop-blur-sm rounded-xl shadow-md container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center my-8 text-gray-700">My Skills</h2>

            {/* Skill Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 min-h-[120px] w-full rounded-xl shadow-md bg-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100"
                    >
                        <i className={`${skill.icon} text-4xl text-indigo-600`}></i>
                        <p className="mt-2 text-lg font-semibold text-gray-800">{skill.name}</p>
                    </div>
                ))}
            </div>


            {/* Button to Navigate to Projects Page */}
            <div className="text-center mb-8">
                <Link
                    to="/projects"
                    className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    View My Projects
                </Link>
            </div>

            {/* Certification Grid */}
            <h2 className="text-3xl font-bold text-center my-8 text-gray-700">Certifications</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certificates.map((cert, index) => (
                    <CertificationCard key={index} imageUrl={cert} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
