import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMapPin, FaPhone } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { Menu, servicesData, siteInfo, socialMedia } from "../Data";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <>
      <footer className="bg-[#111111] text-white" 
        //       style={{
        //   backgroundImage:
        //     "url('http://gocreative.ma/wp-content/uploads/2018/11/footer_bg.jpg')",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "scroll",
        //   backgroundPosition: "center center",
        // }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo and socila */}
            <div>
              <img src={assets.logo1} className="w-32" alt="" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Digital services agency specialized in web design, development, and
                digital marketing.
              </p>
              <div className="flex gap-4 text-gray-400 mt-3">
                {socialMedia
                  .filter((item) => item.name !== "phone" && item.name !== "email")
                  .map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      // className="hover:text-1-500"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-1-500 transition-all duration-300 hover:scale-110"
                    >
                      {item.icon}
                    </a>
                  ))}
              </div>
            </div>
            {/* Services */}  
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>

              <div className="flex flex-col gap-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <h3
                      className="text-[14px] font-serif text-gray-400 hover:text-1-500 transition-colors"
                    >{service.title}</h3>
                    {/* <p className="text-1-400">{service.shortDesc}</p> */}
                  </Link>
                ))}
              </div>
            </div>
            {/* Quick Links */}  
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {Menu.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-[14px] font-serif text-gray-400 hover:text-1-500 transition-colors w-24"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

            </div>
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MdPhone size={20} className="text-1-500" />
                <span className="text-[16px]">+212 687976771</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <MdEmail size={20} className="text-1-500" />
                <span className="text-[16px]">todevit@outlook.com</span>
              </div>
            </div>
          </div>
                
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className=" text-center text-sm text-gray-500">
          © {siteInfo.year}
          <span className="text-1-500 font-semibold ml-1">{siteInfo.name}</span>.{" "}
          {siteInfo.rights}
        </div>
              {/* <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-[#00C853] transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00C853] transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00C853] transition-colors text-sm">
                  Cookie Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>

  );
}

export default Footer;
