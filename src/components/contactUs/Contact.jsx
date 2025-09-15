import axios from "axios";
import { useRef, useState } from "react";

const Contact = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(form.current);
        formData.append("service_id", "service_aizwp3l");
        formData.append("template_id", "template_l86fffs");
        formData.append("user_id", "gfP-zW3DD1k0i4mvx");

        try {
            const response = await axios.post(
                "https://api.emailjs.com/api/v1.0/email/send-form",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 200) {
                setStatus("Message sent successfully!");
                form.current.reset();
            } else {
                setStatus("Failed to send. Try again!");
                console.error("Error:", response);
            }
        } catch (error) {
            setStatus("Failed to send. Try again!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <section
            id="contact"
            className="min-h-screen px-6 md:px-10 py-16"
        >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
                Contact Me
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-4 p-6 rounded-2xl shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 border rounded-lg bg-transparent text-gray-900 dark:text-gray-100 dark:border-gray-600"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 border rounded-lg bg-transparent text-gray-900 dark:text-gray-100 dark:border-gray-600"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                        className="w-full p-3 border rounded-lg bg-transparent text-gray-900 dark:text-gray-100 dark:border-gray-600"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full hover:bg-indigo-700 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && <p className="mt-3 text-center">{status}</p>}
                </form>
                {/* Contact Info */}
                <div className="space-y-6 flex flex-col justify-center text-center md:text-left">
                    <p className="text-gray-900 dark:text-gray-100">
                        <strong>Email:</strong> javed033560@gmail.com
                    </p>
                    <p className="text-gray-900 dark:text-gray-100">
                        <strong>Phone:</strong> +92-310-3760117
                    </p>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://www.linkedin.com/in/javed-hussain-b92397275" target="_blank" className="text-indigo-600 dark:text-indigo-400">LinkedIn</a>
                        <a href="https://github.com/Javed0310" target="_blank" className="text-indigo-600 dark:text-indigo-400">GitHub</a>
                        <a href="#" className="text-indigo-600 dark:text-indigo-400">Instagram</a>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;
