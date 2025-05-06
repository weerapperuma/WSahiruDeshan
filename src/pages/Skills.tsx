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
    "public/certificate_Build Job-Winning MERN & React Projects to Land Dream Jobs.jpg",
    "public/certificate_Python Bootcamp-Beginner to Master Programming.jpg",
    "public/certificate_Python Bootcamp-Beginner to Master Programming.jpg",
    // Add paths to your certification images
];

const Skills = () => {
    return (
        <div className="min-h-screen bg-white/80 py-12 px-6 sm:px-8 backdrop-blur-sm rounded-xl shadow-md container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center my-8">My Skills</h2>

            {/* Skill Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hover:bg-gray-100"
                    >
                        <i className={`${skill.icon} text-4xl text-blue-600`}></i>
                        <p className="mt-2 text-lg font-medium">{skill.name}</p>
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
            <h2 className="text-3xl font-bold text-center my-8">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certificates.map((cert, index) => (
                    <CertificationCard key={index} imageUrl={cert} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
