import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, tech, github, demo, imgType, checkBtn }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group w-full max-w-sm sm:max-w-md"
        >
            <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden bg-cover">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-${imgType} group-hover:scale-110 transition-transform duration-500`}
                />
            </div>

            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-indigo-100 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-300 rounded-full line-clamp-1"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center px-4 py-2 text-sm font-medium rounded-lg border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition"

                    >
                        GitHub
                    </a>
                    {checkBtn ? <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                        Live Demo
                    </a> : ''}

                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
