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
            title: "School Education in Kularathna College Ambalangoda",
            icon: <GraduationCap className="text-white" size={20} />,
            description: "Attended school from 2004 to 2017 and passed the O/L exam with A3, B1, C5.",
        },
    ];

    const competitions = [
        "Inovesta",
        "Circle Edge",
    ];

    return (
        <div className="min-h-screen bg-white/80 py-12 px-6 sm:px-8 backdrop-blur-sm rounded-xl shadow-md">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-4xl font-bold text-center mb-10">📘 Timeline So Far</h1>
                <div className="relative border-l-4 border-blue-500">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="mb-10 ml-6">
                            <div className={`absolute -left-[22px] w-10 h-10 rounded-full flex items-center justify-center ${item.highlight ? "bg-green-500" : "bg-blue-500"}`}>
                                {item.icon}
                            </div>
                            <div className="bg-white shadow-md p-5 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                <span className="text-sm text-gray-500">{item.year}</span>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}

                    {expanded && (
                        <div className="mb-10 ml-6">
                            <div className="absolute -left-[22px] w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                <Rocket className="text-white" size={20} />
                            </div>
                            <div className="bg-white shadow-md p-5 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800">Competitions</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-600">
                                    {competitions.map((comp, i) => (
                                        <li key={i}>{comp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center mt-6">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {expanded ? "Show Less ▲" : "Read More ▼"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Biography;
