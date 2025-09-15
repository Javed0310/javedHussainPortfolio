import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <section
            id="project"
            className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-16 bg-gray-50 dark:bg-gray-950"
        >
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
                My Projects
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                <ProjectCard
                    image="/image/libHome.png"
                    title="Library Managment System"
                    description="Libraray Managment System is a Desktop Application using Java and Java Swing. In which a Admin can create Librarian which is responsible for manage books and student record."
                    tech={["Java", "Java Swing", "Sql"]}
                    github="https://github.com/Javed0310/Libarary-Managment-System-Java-Swing"
                    demo="https://yourappdemo.com"
                    imgType={'cover'}
                />

                <ProjectCard
                    image="/image/hexa.png"
                    title="HEXASHOP"
                    description="Fashion website designed with HTML, CSS, and JavaScript, showcasing responsive design, smooth animations, and an elegant UI for enhanced user engagement."
                    tech={["HTML", "CSS", "Javascript"]}
                    github="https://github.com/Javed0310/HexaShop"
                    demo="https://hexashopjk.netlify.app/"
                    imgType={'cover'}
                    checkBtn={true}
                />

                {/* Example Extra Card */}
                <ProjectCard
                    image="/image/fyp.png"
                    title="Digital Munshi (FYP Project)"
                    description="This is a Fintech web Application, in which Business related operation are performed like Customer Account Management, Cash Flow, Stock Book, Bill Book etc. "
                    tech={["Bootstrap/Css", "React", "Javascript"]}
                    github="https://github.com/Javed0310/digital_Munshi_FYP"
                    demo="https://yourportfolio.com"
                    imgType={'cover'}

                />
                <ProjectCard
                    image="/image/expense1.png"
                    title="Expense Tracker App (React Native)"
                    description="Developed an Expense Tracker cross-platform app to manage daily tasks efficiently, reduce paperwork, and securely store data with database integration."
                    tech={["Tailwind", "Toastify", "React-Native", "Redux", "SQL"]}
                    github="https://github.com/Javed0310/expense_tracker_app"
                    demo="https://yourportfolio.com"
                    imgType={'cover'}

                />
                <ProjectCard
                    image="/image/tambooro.png"
                    title="Tambooro Streaming App"
                    description="Tambooro is a modern music app designed for seamless listening and discovery. It allows users to explore songs, create personalized playlists, and enjoy high-quality audio with a simple, intuitive interface."
                    tech={["Tailwind", "React-Native", "Redux", "spring boot", "SQL"]}
                    github="https://github.com/Javed0310"
                    demo="https://yourportfolio.com"
                    imgType={'cover'}

                />
            </div>
        </section>
    );
};

export default Project;
