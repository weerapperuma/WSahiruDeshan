import React, { useState } from "react";
import { CalendarDays, GraduationCap, Rocket } from "lucide-react";

const Biography: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const timeline = [
        {
            year: "2023 - Present",
            title: "GDSE Programme at IJSE",
            icon: <Rocket className="text-white" size={20} />,
            description: "Currently participating in the Graduate Diploma in Software Engineering (GDSE) at IJSE.",
            highlight: true,
        },
        {
            year: "2021 - 2022",
            title: "Diploma in Software Engineering at NIBM",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Completed a diploma in software engineering at the National Institute of Business Management (NIBM).",
        },
        {
            year: "2020",
            title: "A/L Exam - Maths Stream",
            icon: <CalendarDays className="text-white" size={20} />,
            description: "Attempted Advanced Level examination in the Maths stream with result: S1.",
        },
        {
            year: "2017",
            title: "A/L Exam - Commerce Stream",
            icon: <CalendarDays className="text-white" size={20} />,
            description: "Completed A/Ls in the Commerce stream with results: C1, S1.",
        },
        {
            year: "2004 - 2017",
            title: "School Education at Kularathna College, Ambalangoda",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Attended school and passed O/Ls with A3, B1, C5.",
        },
    ];

    const competitions = ["Inovesta", "Circle Edge"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl p-6 sm:p-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16">
                    🚀 My Journey
                </h1>

                <div className="relative pl-6 before:absolute before:top-0 before:left-5 before:w-1 before:h-full before:bg-blue-300/50 before:rounded-full">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="relative mb-12 flex items-start gap-6">
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1.5 shadow-md
                            border-4 border-white/50 z-10 bg-gradient-to-tr from-blue-500 to-blue-600 ring-2 ring-white"
                            >
                                {item.icon}
                            </div>

                            {/* Card */}
                            <div className="flex-1 bg-white/40 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                    <span className="text-sm text-gray-700">{item.year}</span>
                                </div>
                                <p className="mt-2 text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}

                    {expanded && (
                        <div className="relative mb-12 flex items-start gap-6">
                            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center shadow-md mt-1.5 border-4 border-white/50 z-10 ring-2 ring-white">
                                <Rocket className="text-white" size={20} />
                            </div>
                            <div className="flex-1 bg-white/40 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
                                <h3 className="text-xl font-semibold text-gray-800">Competitions</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    {competitions.map((comp, i) => (
                                        <li key={i}>{comp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow transition"
                    >
                        {expanded ? "Show Less ▲" : "Read More ▼"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Biography;
