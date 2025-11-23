import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { servicesData } from "../Data";

export default function MobileNav({ Menu }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [aff, setaff] = useState(false);
    const Services = servicesData.map(el => el.title);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup ملي component كيتمسح
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);
    return (
        <>
            <div className="lg:hidden px-6 py-4 flex items-center justify-between">
                <button onClick={() => setOpen(!open)}>
                    {open ? (
                        <FaTimes size={26} className="text-1-600" />
                    ) : (
                        <FaBars size={26} className="text-1-600" />
                    )}
                </button>
            </div>

            <div
                className={`
                z-50
                lg:hidden 
                fixed left-0 right-0 top-[100px]  
                bg-white shadow-xl border-t border-1-200 
                transition-all duration-300
                ${open ? "opacity-100 h-screen" : "opacity-0 max-h-0 overflow-hidden"}
            `}
            >
                <div className="flex flex-col py-4 px-6 space-y-4">
                    {Menu.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={`
                                    text-lg font-semibold relative pb-2 
                                    hover:text-1-600 transition
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:h-[3px] after:bg-1-500 after:rounded-full 
                                    after:transition-all after:duration-300
                                    ${isActive ? "after:w-10 text-1-600" : "after:w-0 hover:after:w-[20px]"}
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                        <div className="relative group text-[#333] text-lg font-semibold pb-2 
                                    hover:text-1-600 transition
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:h-[3px] after:bg-1-500 after:rounded-full 
                                    after:transition-all after:duration-300">
                    
                      <span className="cursor-pointer" onMouseOver={()=>setaff(true)}>Services</span>
                    
                      <ul
                        className={`
                          absolute left-0 mt-2 w-100 bg-white text-black rounded shadow-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-500 z-20 
                        ${!aff && ' hidden' }`}
                        onClick={()=> setaff(false)}
                      >
                        {
                            [...Services].map(
                                (item,i)=>(
                        <Link to={`/services/${item.replace(/[\s/]+/g, '-').toLowerCase()}`} key={i} onClick={()=>setOpen(false)}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li></Link>

                                )
                            )
                        }
                     
                      </ul>
                    
                    </div>
                </div>
            </div>
        </>
    );
}
