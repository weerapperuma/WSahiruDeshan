const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white/30 to-white/70 py-20 px-6 sm:px-8 backdrop-blur-lg">
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl p-10">
                <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
                    About Me
                </h1>
                <div className="flex flex-col items-center">
                    <img
                        src="/Circleedge.jpg"
                        alt="Your Profile Picture"
                        className="w-36 h-36 rounded-full border-4 border-cyan-500 shadow-lg mb-8"
                    />
                    <p className="text-xl text-center text-gray-800 font-medium mb-6 leading-relaxed">
                        I'm <span className="text-cyan-700 font-semibold">Sahiru Deshan</span>, a dedicated software engineering student passionate about backend systems and smart design.
                    </p>
                    <p className="text-lg text-center text-gray-700 mb-4 leading-relaxed">
                        My current focus is Java with Spring Boot and scalable APIs. I'm also diving deep into front-end tools like React, TypeScript, and Tailwind CSS to become a full-stack developer.
                    </p>
                    <p className="text-lg text-center text-gray-700 mb-8 leading-relaxed">
                        Outside coding, I run a monster fish aquarium — building it is like designing a living system, one fish at a time.
                    </p>
                </div>
                <div className="text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-2 px-8 rounded-full shadow-md transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
