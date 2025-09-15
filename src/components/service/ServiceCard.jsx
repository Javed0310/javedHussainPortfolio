import { motion } from "framer-motion";

const ServiceCard = ({ title, description, image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all w-full max-w-sm"
        >
            {/* Image */}
            <motion.img
                src={image}
                alt={title}
                className="w-20 h-20 mb-4 object-contain rounded-full border-4 border-indigo-600 p-2 bg-gray-100 dark:bg-gray-800"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
            />

            {/* Title */}
            <motion.h3
                className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h3>

            {/* Description */}
            <motion.p
                className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default ServiceCard;
