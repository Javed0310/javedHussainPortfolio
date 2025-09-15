import { useEffect, useRef, useState } from 'react';
import '../../index.css';
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Icons from './icon/Icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Home = () => {
    const ref = useRef(null);
    const [typed, setTyped] = useState("");

    useEffect(() => {
        const full = "I''m Javed Hussain";
        let i = 0;
        const id = setInterval(() => {
            setTyped((t) => t + full[i]);
            i++;
            if (i >= full.length - 1) clearInterval(id);
        }, 90);
        return () => clearInterval(id);
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [15, -15]);
    const rotateY = useTransform(x, [-50, 50], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX / 10);
        y.set(offsetY / 10);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 px-6 md:px-10 lg:px-16 lg:ms-28 py-20"
        >
            <motion.div
                className="flex flex-col gap-6 left-4 bottom-10 md:top-[60%] md:translate-y-[-50%] md:translate-x-[-120%] z-50 sm:top-[20%] sm:left-[5%] sm:absolute"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeIn' }}
                viewport={{ once: true }}
            >
                <Icons
                    link="https://www.linkedin.com/in/javed-hussain-b92397275"
                    color="#0A66C2"
                    icons={<FaLinkedin />}
                />
                <Icons
                    link="https://github.com/Javed0310"
                    color="#FFFFFF"
                    icons={<FaGithub />}
                />
                <Icons
                    link="https://www.instagram.com/javed-hussain"
                    color="#E4405F"
                    icons={<FaInstagram />}
                />
            </motion.div>

            {/* Left Text Section */}
            <motion.div
                className="w-full leading-9 py-2 px-2 flex flex-col gap-6 text-center md:text-left"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {`Hi, ${typed}`}
                    <span className="border-r-2 border-indigo-600 animate-pulse ml-1"></span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
                    Full Stack Java Developer | React js, Tailwind, Javascript, Java, Spring Boot, Hibernate, MySQL | Mobile App Developer (React Native)
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4">
                    <a href={"#project"} className="bg-indigo-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-indigo-700 transition cursor-pointer">
                        Explorer
                    </a>
                    <a
                        href="/Javed_Hussain_Resume.pdf"
                        download="Javed_Hussain_Resume.pdf"
                        className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-2 rounded-2xl hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
                    >
                        Download Resume
                    </a>
                </div>

                <div className='w-[100%] flex mt-3 '>
                    <span className='dark:text-indigo-400 font-bold text-1xl sm:text-1xl border-r-3 border-r-blue-950 pr-1'>2<sup className='font-bold'>+</sup> Experience</span>
                    <span className='dark:text-indigo-400 font-bold text-1xl sm:text-1xl border-r-3 border-r-blue-950 ps-2 pr-1'>10<sup>+</sup> Projects</span>
                    <span className='dark:text-indigo-400 font-bold text-1xl sm:text-1xl ps-2'>500<sup>+</sup> Linkedin Followers</span>
                </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div className="flex justify-center mb-8 md:mb-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={ref}
            >
                <motion.img
                    src="./image/pro.png"
                    alt="profile"
                    className="w-40 sm:w-56 md:w-72 rounded-full shadow-lg"
                    style={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
            </motion.div>
        </section>

    );
}

export default Home;
