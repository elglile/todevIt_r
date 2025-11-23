import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { servicesData } from "../Data";
import { Link } from "react-router-dom";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const boxRef = useRef(null);
  const [aff, setaff] = useState(false);
  // const suggestions = [
  //  ...servicesData
  // ];

  const filtered = servicesData.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    
    <div ref={boxRef} className="relative flex items-center">
      {/* Search Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center w-[32px] h-[32px] 
          rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-200 
          ${open && "opacity-0"} absolute`}
      >
        <FaSearch size={18} />
      </button>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => {setQuery(e.target.value); setaff(true)} }
        onFocus={() => setOpen(true)}
        placeholder="Search..."
        className={`bg-gray-100 rounded-full px-4 py-2 h-[35px] outline-none
          transition-all duration-300 text-sm font-mono
          ${open ? "w-[220px] opacity-100" : "w-0 opacity-0"}`}
      />

      {/* Suggestions List */}
      {open && aff && query.length > 0 && (
        <ul
          className="absolute left-0 top-[45px] w-[220px] bg-white shadow-lg 
          rounded-md text-sm text-gray-700 py-2 z-20 transition-all duration-300"
        >
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <Link onClick={()=>{setaff(false); setQuery("");}}
                key={i} to={"/services/"+item.title.replace(/[\s/]+/g, '-').toLowerCase()}
              ><div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" ><li
              
              className="w-full block"
              >
                {item.title}
               
              </li> 
              <li className=""><small>{item.longDesc.slice(0,30)+"..."}</small>
              </li>
              </div >
              </Link>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
