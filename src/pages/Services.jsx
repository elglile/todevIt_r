import { Link } from "react-router-dom";
import { servicesData } from "../Data";
import { motion } from "framer-motion";

// Variants للـ grid و العناصر داخله
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.12,
      staggerDirection: -1, // reverse لما يختفي من الشاشة
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

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
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

export default function Services() {
  return (
    <section id="services" className="py-18 bg-1-50/45">
      <div className="max-w-7xl mx-auto px-6">
        {/* العنوان مع أنيميشن دخول/خروج */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }} // يعيد الأنيميشن
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <span className="w-20 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-20 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold text-1-900 mb-4">
            Our Services
          </h2>
        </motion.div>

        {/* الـ grid مع أنيميشن + reverse عند الخروج */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }} // مهم عشان يعكس لما يطلع من الشاشة
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                to={`/services/${service.title
                  .replace(/[\s/]+/g, "-")
                  .toLowerCase()}`}
                className="group bg-1-50/50 p-8 rounded-2xl border-2 border-1-200 
                  hover:border-1-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
              >
                <div
                  className="w-[200px] h-[150px] mx-auto bg-1-200/0 rounded-lg flex items-center justify-center mb-2 
                        group-hover:scale-105 transition-transform duration-300
                        shadow shadow-1-50"
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold font-mono text-center text-1-500 mb-2 group-hover:text-1-600 transition-colors duration-400">
                  {service.title}
                </h3>
                {/* <p className="text-1-400">{service.shortDesc}</p> */}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
