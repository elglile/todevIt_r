import { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend, FiMessageCircle } from "react-icons/fi";
import { socialMedia } from "../Data";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const sendToMe = emailjs.send(
      "service_z1gx9dd",
      "template_qtzm3jd",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "f8LAGJRmRyY_x-uC3"
    );

    const sendToUser = emailjs.send(
      "service_z1gx9dd",
      "template_ojyo5d3",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "f8LAGJRmRyY_x-uC3"
    );

    Promise.all([sendToMe, sendToUser])
      .then(() => {
        setSent(true);
        setLoading(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("Email error:", err);
        setLoading(false);
      });
  };

  return (
    <>
      <motion.section
        className="w-4/5 md:flex md:items-center md:justify-between mx-auto py-8 my-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }} // ينعاد مع السكول لو تحب
      >
        {/* العمود اليسار (النص + السوشال) */}
        <motion.div className="md:w-[145vh]" variants={leftVariants}>
          <div className="flex items-center justify-start space-x-3 mb-2">
            <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
          </div>
          <motion.h2
            className="text-4xl md:text-4xl font-bold text-1-900 mb-4"
            variants={itemVariants}
          >
            Get in touch
          </motion.h2>

          <motion.p
            className="w-5/6 mb-5 text-[18px] leading-[30px] align-baselin outline-0 text-gray-400"
            style={{
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontStyle: "inherit",
              boxSizing: "border-box",
            }}
            variants={itemVariants}
          >
            TodevIt is a modern digital agency specializing in creating web
            solutions and managing online communication. We offer web
            development, UI/UX design, digital marketing, social media
            management, content creation, and comprehensive support to
            strengthen your company's digital presence.
          </motion.p>

          <motion.div className="space-y-4" variants={itemVariants}>
            {socialMedia
              .filter((item) => item.name === "phone" || item.name === "email")
              .map((item) => (
                <motion.div
                  key={item.name}
                  className="flex items-center gap-3 space-y-3"
                  variants={itemVariants}
                >
                  <span className="px-2 py-3 shadow shadow-gray-200 rounded-xs">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold ">
                      {item.title}:
                    </span>
                    <span className="text-lg font-medium text-gray-500">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* الفورم */}
        <motion.form
          onSubmit={sendEmail}
          className="space-y-4 bg-white p-6 rounded-xl shadow-[0_3px_15px_rgba(0,0,0,0.08)]"
          variants={rightVariants}
        >
          <motion.h3
            className="text-xl font-bold text-gray-800 mb-3"
            variants={itemVariants}
          >
            Write to us :
          </motion.h3>

          <motion.input
            variants={itemVariants}
            type="text"
            name="name"
            placeholder="Nom *"
            className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <motion.input
            variants={itemVariants}
            type="email"
            name="email"
            placeholder="Email *"
            className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <motion.input
            variants={itemVariants}
            type="text"
            name="phone"
            placeholder="Téléphone"
            className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
            value={formData.phone}
            onChange={handleChange}
          />

          <motion.textarea
            variants={itemVariants}
            name="message"
            placeholder="Message..."
            rows={5}
            className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <motion.div
            className="flex items-center gap-4 pt-2"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className="bg-[#ff7b00] flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-[#ff6a00] transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend size={18} />
              {loading ? "Envoi..." : "Envoyer"}
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const text = `Nom: ${formData.name}\nEmail: ${formData.email}\nTel: ${formData.phone}\nMessage: ${formData.message}`;
                const encodedText = encodeURIComponent(text);
                window.open(
                  `https://wa.me/212687976771?text=${encodedText}`,
                  "_blank"
                );
              }}
              className="bg-green-600 flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-green-700 transition"
            >
              <FiMessageCircle size={18} />
              WhatsApp
            </motion.button>
          </motion.div>

          {sent && (
            <motion.p
              className="text-green-600 font-semibold mt-2"
              variants={itemVariants}
            >
              Message envoyé avec succès !
            </motion.p>
          )}
        </motion.form>
      </motion.section>
    </>
  );
}
