import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import { aboutData } from "../Data";
import Services from "./Services";
import { motion } from "framer-motion";

const containerVariants = {
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

const About = () => {
  return (
    <>
      <PageHeader />

      <motion.section
        className="lg:w-[85%] mx-auto bg-white py-16 px-6 md:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }} // يعيد الأنيميشن مع السكول لو حاب
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* LEFT TEXT */}
          <motion.div className="flex-1" variants={leftVariants}>
            <motion.div variants={textFadeVariants}>
              <div className="flex items-center justify-start space-x-3 mb-2">
                <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
                <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
                <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
              </div>
              <h2 className="text-4xl md:text-3xl font-bold text-1-900">
                {aboutData.title}
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-700 leading-relaxed whitespace-pre-line text-xl font-serif mt-4"
              variants={textFadeVariants}
            >
              {aboutData.text}
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="space-y-2 md:flex-1 md:grid md:grid-cols-3 gap-4"
            variants={rightVariants}
          >
            {/* LEFT BIG IMAGE (column 1 spans full height) */}
            <div className="hidden lg:block md:col-span-1 md:row-span-1"></div>

            {/* RIGHT TOP SMALL IMAGE */}
            <motion.div
              className="md:col-span-2"
              variants={textFadeVariants}
            >
              {aboutData.images[1]}
            </motion.div>

            {/* RIGHT BOTTOM SMALL IMAGE */}
            <motion.div
              className="md:col-span-2"
              variants={textFadeVariants}
            >
              {aboutData.images[0]}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Services />
    </>
  );
};

export default About;
