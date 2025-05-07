import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/projects", label: "Projects" },
        { path: "/skills", label: "Skills" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 drop-shadow-md">
                    <Link to="/">Sahiru D.</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "hover:text-blue-500"
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden px-6 pb-4 space-y-3 bg-white shadow-md text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "hover:text-blue-500"
                                }
                                onClick={() => setIsOpen(false)} // close on click
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};
