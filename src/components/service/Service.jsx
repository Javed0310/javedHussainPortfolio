import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            title: "Full Stack Development",
            description:
                "Building responsive, scalable, and user-friendly web apps using React & Spring Boot.",
            image: "./image/web.png",
        },
        {
            title: "App Development (React Native)",
            description:
                "Creating cross-platform mobile apps with smooth UI & performance using React Native.",
            image: "./image/app.png",
        },
        {
            title: "Backend APIs",
            description:
                "Designing secure REST APIs and scalable backend systems with Java Spring Boot.",
            image: "./image/api.png",
        },
        {
            title: "Desktop Application",
            description:
                "A desktop application developed using Java and Swing, featuring an intuitive user interface, efficient data handling, and responsive design for smooth user experience.",
            image: "./image/desktop.png",
        },
    ];

    return (
        <section id="services" className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
                My Services
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {services.map((service, i) => (
                    <ServiceCard key={i} {...service} />
                ))}
            </div>
        </section>
    );
}
