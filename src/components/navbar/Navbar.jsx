import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-indigo-600">Port<span className="text-white">folio</span></h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
                    <li><a href="#about" className="hover:text-indigo-600">About</a></li>
                    <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
                    <li><a href="#project" className="hover:text-indigo-600">Project</a></li>
                    <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden ml-4 p-2 rounded-md bg-gray-900"
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4 shadow-md">
                    <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">About</a>
                    <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">Services</a>
                    <a href="#project" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">Project</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600">Contact</a>
                </div>
            )}
        </nav>
    );
};
export default Navbar;