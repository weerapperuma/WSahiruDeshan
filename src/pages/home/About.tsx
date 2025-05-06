const About = () => {
    return (
        <div className="min-h-screen bg-white/80 py-12 px-6 sm:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">About Me</h1>
                <div className="flex flex-col items-center">
                    <img
                        src="../../assets/project_thumbnails/Circleedge.jpg"
                        alt="Your Profile Picture"
                        className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6"
                    />
                    <p className="text-xl font-semibold text-gray-700 text-center mb-4">
                        Hello! I'm <span className="text-blue-600">Sahiru Deshan</span>, a passionate software engineering student with a love for technology and problem-solving.
                    </p>
                    <p className="text-lg text-gray-600 text-center mb-4">
                        I specialize in back-end development with expertise in Java, Spring Boot, and Python. Currently, I'm working on enhancing my skills in front-end technologies like React, TypeScript, and Tailwind CSS.
                    </p>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        When I'm not coding, you can find me spending time with my aquarium, which I consider a creative outlet where I build and maintain a monster fish collection.
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <a
                        href="/contact"
                        className="inline-block text-lg text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>

            </div>
        </div>
    );
};

export default About;
