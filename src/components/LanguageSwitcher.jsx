import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { assets } from "../assets/assets";

function LanguageSwitcher() {
  const [lang, setLang] = useState("EN");

  const toggleLang = () => {
    setLang((prev) => (prev === "FR" ? "EN" : "FR"));
  };

  return (
    <div
      onClick={toggleLang}
      className="flex items-center gap-2 cursor-pointer select-none text-1-800 hover:text-1-600 transition"
    >
      {/* <MdLanguage size={26} className="text-1-600" /> */}

      {/* FLAG CIRCLE */}
      <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-1-300">
        {lang === "FR" ? (
          // French Flag
          <div className="">
            {/* <span className="text-white text-[10px] font-bold">UK</span> */}
            <img src={assets.fre} alt="UK" />
          </div>
        ) : (
          // English/UK Flag simplified
          <div className="">
            {/* <span className="text-white text-[10px] font-bold">UK</span> */}
            <img src={assets.unik} alt="UK" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
