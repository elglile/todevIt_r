import React from "react";
import { MdEmail } from "react-icons/md";
import { socialMedia } from "../Data";
import { Link } from "react-router-dom";

const Topbar = () => {
    const phone = socialMedia.find((i) => i.name === "phone");
    const email = socialMedia.find((i) => i.name === "email");
    return (
        <>
            <section className="hidden lg:flex items-center justify-center border-b border-gray-300 text-[16px] font-mono ">
                <div>
                    <a
                        href={email.url}
                        className="  m-auto  py-4 flex items-center justify-center  w-full hover:text-1-900 px-8"
                    >
                        {email.icon}
                        <span className="transition-colors duration-400">{email.text}</span>
                    </a>
                </div>
                <div className="col-span-2 flex items-center justify-between px-8  border-x border-gray-300 hover:text-1-900 w-3xl">
                    <a href="" className="flex">
                        {phone.icon}
                        <span className="tracking-widest">{phone.text}</span>
                    </a>
                    <div className="flex gap-4 justify-center  ">
                        {socialMedia

                            .filter((item) => item.name !== "phone" && item.name !== "email")
                            .map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className=" text-gray-800 border-2 border-gray-700 p-1.5 rounded-full"
                                // className="flex items-center gap-2"
                                >
                                    {item.icon}
                                </a>
                            ))}
                    </div>
                </div>
                <div>
                    <Link
                        to={"/contact"}
                        className="text-1-600 font-bold text-lg text-center my-auto px-8"
                    >
                        Obtenir un devis
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Topbar;
