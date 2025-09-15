import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const About = () => {


    return (
        <section
            id="about"
            className="min-h-screen w-full overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-16 flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-900"
        >
            {/* Image Side */}
            <motion.div
                className="flex justify-center md:w-1/2 w-full"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="/image/aboutpic.jpeg" // ✅ keep inside public folder
                    alt="About Me"
                    className="w-32 sm:w-48 md:w-64 lg:w-72 max-w-full rounded-2xl shadow-xl border-4 border-indigo-600 object-cover"
                />
            </motion.div>

            {/* Text Side */}
            <motion.div
                className="md:w-1/2 w-full text-center md:text-left"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Hi, I’m <span className="font-semibold text-indigo-600">Javed Hussain</span>,
                    a passionate Full Stack Developer with 2 year of Professional experience in designing and developing scalable web and mobile applications. I specialize in creating clean, efficient, and user-friendly solutions that deliver real value.

                </motion.p>

                {/* Personal Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                    {[
                        "🎨 Frontend: HTML, CSS, Javascript, React.js, Tailwind, Material UI",
                        "⚙️ Backend: Java, Spring Boot, Hibernate",
                        "🗄️ Database: MySQL",
                        "📱 Mobile Apps: React Native",
                        "🔗 Tools & Collaboration: GitHub, REST APIs",
                        "🌍 Open to: Onsite/Remote"
                    ].map((item, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * i }}
                            viewport={{ once: true }}
                            className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow"
                        >
                            {item}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
