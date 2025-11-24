import { useParams } from "react-router-dom";
import { servicesData } from "../Data";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import WorkProcess from "../components/WorkProcess";
import { motion } from "framer-motion";

const mainContainerVariants = {
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

const textFadeVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const toolsContainerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1, // reverse عند الخروج
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.12,
      staggerDirection: 1, // ترتيب طبيعي عند الدخول
    },
  },
};

const toolItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function ServiceDetails() {
  const { title } = useParams();
  const service = servicesData.find(
    (s) => s.title.replace(/[\s/]+/g, "-").toLowerCase() === title
  );

  if (!service)
    return (
      <h2 className="text-center py-20 text-xl font-semibold">
        Service not found.
      </h2>
    );

  return (
    <>
      <PageHeader />

      {/* MAIN SECTION */}
      <motion.section
        className="py-20 max-w-4xl mx-auto w-[90%]"
        variants={mainContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={textFadeVariants}>
          <div className="flex items-center justify-start space-x-3 mb-2">
            <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-1-900 mb-8">
            {service.title}
          </h2>
        </motion.div>

        <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE BOX */}
          <motion.div
            className="relative mx-auto"
            variants={leftVariants}
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-1-500 rounded-xl"></div>

            <div className="rounded-xl overflow-hidden shadow-lg relative z-10 flex items-center justify-center bg-white">
              {service.icon}
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div variants={rightVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-1-600 mb-4"
              variants={textFadeVariants}
            >
              {service.shortDesc}
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8"
              variants={textFadeVariants}
            >
              {service.longDesc}
            </motion.p>

            <motion.div
              className="flex gap-4"
              variants={textFadeVariants}
            >
              {/* WHATSAPP BUTTON */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const msg = encodeURIComponent(
                    "Bonjour, je veux plus d'informations !"
                  );
                  window.open(
                    `https://wa.me/212687976771?text=${msg}`,
                    "_blank"
                  );
                }}
                className="group px-4 lg:px-8 py-3 bg-green-500 text-white rounded-full 
                  font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-md"
              >
                <span className="text-lg">
                  <FaWhatsapp />
                </span>
                WhatsApp
              </motion.button>

              {/* PHONE BUTTON */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                href="tel:212687976771"
                className="px-4 lg:px-6 py-3 border border-gray-400 rounded-full 
                  text-gray-700 font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-sm"
              >
                <FaPhoneAlt /> Phone number
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* TOOLS SECTION - Only if service has tools */}
      {service.Tools && service.Tools.length > 0 && (
        <motion.section
          className="mt-20 bg-black py-16 w-full"
          variants={toolsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Technologies We Use
          </h3>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={toolsContainerVariants}
          >
            {service.Tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={toolItemVariants}
                whileHover={{ scale: 1.06 }}
                className="group w-28 h-20 bg-white rounded-2xl shadow-lg 
                  flex flex-col items-center justify-center gap-2 
                  hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl transition-colors duration-300 group-hover:text-inherit">
                  {tool.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* STEPS SECTION */}
      <motion.section
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <WorkProcess />
        </div>
      </motion.section>
    </>
  );
}
