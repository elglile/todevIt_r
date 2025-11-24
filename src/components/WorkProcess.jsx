import { useState } from "react";
import { steps } from "../Data";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <motion.div
      className="flex flex-row items-stretch gap-8 rounded-lg bg-white py-6 md:p-8 shadow-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* LEFT SIDEBAR */}
      <div className="relative flex flex-col w-20 lg:w-64">
        {/* Main vertical line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>

        {/* Active highlight bar */}
        <div
          className="absolute left-6 w-0.5 bg-1-500 transition-all duration-300"
          style={{
            top: `${activeStep * 78}px`,
            height: "60px",
          }}
        ></div>

        {/* Steps List */}
        <div className="relative space-y-6">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="flex items-center gap-4 group relative pl-12 pt-2 pb-2"
            >
              {/* Circle icon */}
              <motion.div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all
                  ${
                    activeStep === index
                      ? "border-1-500 bg-1-100 text-1-600"
                      : "border-gray-300 text-gray-400"
                  }`}
                whileHover={{ scale: 1.05 }}
                animate={{
                  scale: activeStep === index ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {step.icon}
              </motion.div>

              {/* Step title */}
              <span
                className={`font-medium text-sm transition-colors hidden lg:block
                  ${activeStep === index ? "text-black" : "text-gray-500"}
                `}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-gray-300"></div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center lg:text-left flex flex-col w-64 items-center lg:items-start"
          >
            {active.img && (
              <img
                src={active.img}
                alt={active.title}
                className="w-40 mt-6 object-contain opacity-90"
              />
            )}

            <h2 className="text-2xl font-bold mb-4 mt-4">{active.title}</h2>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              {active.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
