import { FiCheckCircle } from "react-icons/fi";
import { benefits, imgWhyChooseUs } from "../Data";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imagesContainerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1, // reverse عند الخروج
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      staggerDirection: 1, // ترتيب طبيعي عند الدخول
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const textContainerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <motion.section
      className="py-20 bg-white mx-auto"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} // يعيد الأنيميشن مع الـ scroll
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-4/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* الصور */}
          <motion.div
            className="grid grid-cols-2 gap-4 order-2 md:order-2"
            variants={imagesContainerVariants}
          >
            {imgWhyChooseUs.map((col, colIndex) => (
              <motion.div
                key={colIndex}
                className={col.extraClass}
                variants={imageItemVariants}
              >
                {col.images.map((img, index) => (
                  <div
                    key={index}
                    className={`${img.h} bg-gradient-to-br ${img.gradient} rounded-2xl overflow-hidden`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* النص و الـ benefits */}
          <motion.div
            className="space-y-6 order-1 md:order-2"
            variants={textContainerVariants}
          >
            <motion.h2
              className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#111111]"
              variants={textItemVariants}
            >
              Why Choose Us?
            </motion.h2>

            <motion.p
              className="md:text-[12px] lg:text-[14px] text-gray-600 leading-relaxed"
              variants={textItemVariants}
            >
              We blend modern creativity with reliable execution to build
              digital solutions that genuinely move your business forward. As a
              growing digital agency, we focus on delivering real value, clean
              user experiences, and long-term partnerships.
            </motion.p>

            <motion.div
              className="space-y-4 pt-4"
              variants={textItemVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={textItemVariants}
                >
                  <FiCheckCircle
                    className="text-[#00C853] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-[#111111] font-medium md:text-[13px] lg:text-[14px]">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
