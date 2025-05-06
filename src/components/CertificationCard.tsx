import React from "react";

interface CertificationCardProps {
    imageUrl: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ imageUrl }) => {
    return (
        <div className="flex justify-center items-center border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
                src={imageUrl}
                alt="Certification"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CertificationCard;
