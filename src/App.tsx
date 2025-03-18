export default function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-900">My Portfolio</h1>
                    <div className="flex space-x-4">
                        <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                        <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
                        <a href="#education" className="text-gray-700 hover:text-gray-900">Education</a>
                        <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
                        <a href="#certificates" className="text-gray-700 hover:text-gray-900">Certificates</a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h2>
                            <p className="text-xl mb-6">Software Developer | Tech Enthusiast</p>
                            <div className="flex space-x-4">
                                {/*<a href="#" className="p-2 hover:bg-white/10 rounded-full"><Github /></a>*/}
                                {/*<a href="#" className="p-2 hover:bg-white/10 rounded-full"><Linkedin /></a>*/}
                                {/*<a href="#" className="p-2 hover:bg-white/10 rounded-full"><Mail /></a>*/}
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                                alt="Profile"
                                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                            <ul className="space-y-2">
                                <li>HTML5 & CSS3</li>
                                <li>JavaScript/TypeScript</li>
                                <li>React.js</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                            <ul className="space-y-2">
                                <li>Node.js</li>
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>SQL Databases</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
                            <ul className="space-y-2">
                                <li>Git & GitHub</li>
                                <li>Docker</li>
                                <li>AWS</li>
                                <li>Agile Methodologies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}