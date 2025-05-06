import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Sahiru Deshan — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
