const About = () => {
    return (
        <div className="w-full min-h-screen bg-white/80 backdrop-blur-md border border-white/40 rounded-none sm:rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
                About Me
            </h1>
            <div className="flex flex-col items-center">
                <img
                    src="/Circleedge.jpg"
                    alt="Your Profile"
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-cyan-500 shadow-lg mb-6"
                />
                <p className="text-lg sm:text-xl text-center text-gray-800 font-medium mb-4 leading-relaxed">
                    I'm <span className="text-cyan-700 font-semibold">Sahiru Deshan</span>, a dedicated software engineering student passionate about backend systems and smart design.
                </p>
                <p className="text-base sm:text-lg text-center text-gray-700 mb-4 leading-relaxed">
                    My current focus is Java with Spring Boot and scalable APIs. I'm also diving deep into front-end tools like React, TypeScript, and Tailwind CSS to become a full-stack developer.
                </p>
                <p className="text-base sm:text-lg text-center text-gray-700 mb-6 leading-relaxed">
                    Outside coding, I run a monster fish aquarium — building it is like designing a living system, one fish at a time.
                </p>
            </div>
            <div className="text-center">
                <a
                    href="/contact"
                    className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white text-base sm:text-lg font-semibold py-2 px-6 sm:px-8 rounded-full shadow-md transition duration-300"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default About;
