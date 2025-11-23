import { FaArrowRight, FaCode, FaCloud, FaPalette, FaWhatsapp } from "react-icons/fa";
import HeroServices from "./HeroServices";


export default function Hero() {
    return (
        <section className="relative bg-[#111111] text-white px-5 md:px-10 py-32 lg:p-28 overflow-hidden">
            <div className="z-1 inset-0 bg-gradient-to-br from-1-700 via-transparent to-[#00C853]/10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-5xl font-bold leading-tight">
                            Empowering Your
                            <span className="text-1-600">Digital Future.</span>
                        </h1>
                        <p className="text-xs text-gray-300 leading-relaxed">
                            High-performance websites, cloud solutions, and creative experiences.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 text-[14px]">
                            <button className="group px-6 py-2 bg-gradient-to-r from-1-400 to-1-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-1-700 transition-all duration-300 flex items-center gap-2">
                                Get a  quote
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="flex justify-between items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300">
                                Contact Us <FaWhatsapp  className="ml-3" />
                            </button>
                        </div>
                    </div>

                    <HeroServices />
                </div>
            </div>


        </section>
    );
}