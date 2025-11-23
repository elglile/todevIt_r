import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { servicesData } from "../Data";

export default function MobileNav({ Menu, open, toggle, close }) {

  const location = useLocation();
  const Services = servicesData.map(el => el.title);
    const [aff, setaff] = useState(false);
  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* Button */}
      <div className="lg:hidden px-6 py-4 flex items-center justify-between">
        <button onClick={toggle}>
          {open ? (
            <FaTimes size={26} className="text-1-600" />
          ) : (
            <FaBars size={26} className="text-1-600" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          z-50 lg:hidden fixed left-0 right-0 top-[100px]
          bg-white shadow-xl border-t transition-all duration-300
          ${open ? "opacity-100 h-screen" : "opacity-0 max-h-0 overflow-hidden"}
        `}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">

          {/* Links */}
          {Menu.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={close}
                className="text-lg font-semibold pb-2"
              >
                {link.name}
              </Link>
            );
          })}

          {/* Services */}
          <div>
            <span className="cursor-pointer" onClick={()=>setaff(!aff)}>Services</span>
            <ul className="mt-2 bg-white rounded shadow-lg">
              {aff && Services.map((item, i) => (
                <Link
                  key={i}
                  to={`/services/${item.replace(/[\s/]+/g, "-").toLowerCase()}`}
                  onClick={close}
                >
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
