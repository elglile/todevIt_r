import { useParams } from "react-router-dom";
import { servicesData } from "../Data";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import WorkProcess from "../components/WorkProcess";

export default function ServiceDetails() {
  const { title } = useParams();
  const service = servicesData.find((s) => s.title.replace(/[\s/]+/g, '-').toLowerCase() === title);

  if (!service) return <h2 className="text-center py-20">Service not found.</h2>;

  return (
    <>
      <PageHeader />
      <section className="py-20 max-w-4xl mx-auto w-[90%]">
        <div>
          <div className="flex items-center justify-start space-x-3 mb-2">
            <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-1-900 mb-8">
            {service.title}
          </h2>
          <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">

            {/* IMAGE BOX */}
            <div className="relative mx-auto">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-1-500 rounded-xl"></div>

              <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
                {service.icon}
              </div>
            </div>

            {/* TEXT SIDE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-1-600 mb-4">
                {service.shortDesc}
              </h2>

              <p className="text-gray-600 mb-8">
                {service.longDesc}
              </p>

              <div className="flex gap-4">

                {/* WHATSAPP BUTTON */}
                <button
                  onClick={() => {
                    const msg = encodeURIComponent("Bonjour, je veux plus d'informations !");
                    window.open(`https://wa.me/212687976771?text=${msg}`, "_blank");
                  }}
                  className="group px-4 lg:px-8 py-3 bg-green-500 text-white rounded-full 
        font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-md"
                >
                  <span className="text-lg"><FaWhatsapp /></span>
                  WhatsApp
                </button>

                {/* PHONE BUTTON */}
                <a
                  href="tel:212687976771"
                  className=" px-4 lg:px-6 py-3 border border-gray-400 rounded-full 
        text-gray-700 font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-sm"
                >
                  <FaPhoneAlt /> Phone number
                </a>

              </div>
            </div>

          </div>
        </div>
        {/* TOOLS SECTION - Only if service has tools */}
      </section>
      {service.Tools && service.Tools.length > 0 && (
        <div className="mt-20 bg-black py-16 w-full">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Technologies We Use
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {service.Tools.map((tool, index) => (
              <div
                key={index}
                className="group w-28 h-20 bg-white rounded-2xl shadow-lg 
                    flex flex-col items-center justify-center gap-2 
                    hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* ICON */}
                <div className="text-3xl transition-colors duration-300 group-hover:text-inherit">
                  {tool.icon}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}


      {/* STEPS SECTION - Only if service has steps */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <WorkProcess />
        </div>
      </section>


    </>
  );
}
