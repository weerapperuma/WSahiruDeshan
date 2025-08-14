import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

interface CertificationCardProps {
    imageUrl: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ imageUrl }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md border border-gray-600/30 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt="Certification"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                            title="View Full Size"
                        >
                            <ExternalLink size={20} />
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-full shadow-xl hover:shadow-green-500/25 transition-all duration-300"
                            title="Download"
                        >
                            <Download size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
            
            {/* Certificate Info */}
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400 text-sm font-medium">Professional Certification</span>
                    </div>
                    <span className="text-gray-400 text-xs">Click to view</span>
                </div>
            </div>
        </motion.div>
    );
};

export default CertificationCard;
