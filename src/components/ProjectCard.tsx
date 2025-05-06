import { useState } from "react";

interface ProjectCardProps {
    image: string;
    video: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
}
// Map all assets into an object, eager-loaded
const images: Record<string, string> = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    import: 'default',
});

// Extract filename and find its URL
const getImage = (imagePath: string): string => {
    const fileName = imagePath.split('/').pop(); // get "movie-site.png"
    const key = `../assets/${fileName}`;
    return images[key] || ''; // fallback if image not found
};


export const ProjectCard = ({
    image,
    video,
    title,
    description,
    tech,
    github,
}: ProjectCardProps) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Image & Hover Content */}
                <div
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setShowOverlay(true)}
                    onMouseLeave={() => setShowOverlay(false)}
                    onTouchStart={() => setShowOverlay(!showOverlay)}
                >
                    <img
                        src={getImage(image)}
                        alt={title}
                        className="w-full h-[260px] object-cover"
                    />
                    <div className="p-4 bg-white rounded-b-2xl">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">{title}</h3>

                        <div className="flex flex-wrap justify-center gap-2">
                            {tech.map((item, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-sky-100 to-blue-100 text-blue-800 rounded-full shadow-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => setShowPreview(true)}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium py-2 px-5 rounded-full shadow-lg transition-all duration-300"
                            >
                                ▶ Preview
                            </button>

                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-medium py-2 px-5 rounded-full shadow-lg transition-all duration-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/*Mouse enter or on click action*/}
                    {/*{showOverlay && (*/}
                    {/*    <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center p-4 text-white text-center transition-opacity duration-300">*/}
                    {/*        <h3 className="text-xl font-bold mb-2">{title}</h3>*/}
                    {/*        <p className="text-sm mb-2">{description}</p>*/}
                    {/*        <div className="text-sm italic text-sky-200 flex flex-wrap justify-center gap-2">*/}
                    {/*            {tech.map((item, index) => (*/}
                    {/*                <span key={index} className="px-2 py-0.5 bg-white/10 rounded-full">*/}
                    {/*                    {item}*/}
                    {/*                </span>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}

                    {/*        <div className="flex gap-4 mt-4">*/}
                    {/*            <button*/}
                    {/*                onClick={() => setShowPreview(true)}*/}
                    {/*                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium py-2 px-5 rounded-full shadow-lg transition-all duration-300"*/}
                    {/*            >*/}
                    {/*                ▶ Preview*/}
                    {/*            </button>*/}

                    {/*            <a*/}
                    {/*                href={github}*/}
                    {/*                target="_blank"*/}
                    {/*                rel="noopener noreferrer"*/}
                    {/*                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-medium py-2 px-5 rounded-full shadow-lg transition-all duration-300"*/}
                    {/*            >*/}
                    {/*                GitHub*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>

            {/* Preview Video Modal */}
            {/* Preview Video Modal */}
            {showPreview && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl overflow-hidden w-full max-w-4xl relative">
                        <button
                            onClick={() => setShowPreview(false)}
                            className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full z-10"
                        >
                            ✕
                        </button>

                        <div className="relative w-full pt-[56.25%]"> {/* Aspect ratio box */}
                            <iframe
                                src={video}
                                title={title}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};
