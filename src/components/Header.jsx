import React from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { Menu, servicesData } from '../Data'
import Topbar from './Topbar'
import { MdLanguage } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import SearchBar from './SearchBar'
import LanguageSwitcher from './LanguageSwitcher'
import MobileNav from './MobileNav'

const Header = () => {
  const location = useLocation();
  const [aff, setaff] = React.useState(false);
      const Services = servicesData.map(el => el.title);
  
  return (
    <>
      <Topbar />
      <header
        className='
          flex items-center justify-between px-2 py-5
          lg:flex lg:items-center  lg:justify-center'
      >
        <div className=' flex  items-center'>
        <MobileNav Menu={Menu} />
        <Link to={"/"}>
                <img src={assets.logo1} className='w-20  p-0  ' alt="" />
        </Link>
        </div>
        
        <nav className="hidden lg:flex items-center justify-between  col-span-4  px-20 text-[16px] font-bold space-x-6">
          {Menu.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[#333] no-underline 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:h-[3px] after:bg-1-500 after:rounded-full hover:text-1-500
              after:transition-all after:duration-300 p-2
              ${isActive ? 'after:w-10' : 'after:w-0 hover:after:w-full'}
            `}
              >
                {link.name}
              </Link>
            );
          })}
      <div className="relative group text-[#333] p-2">

  <span className="cursor-pointer" onMouseOver={()=>setaff(true)}>Services</span>

  <ul
    className={`
      absolute left-0 mt-2 w-50 bg-white text-black rounded shadow-lg 
      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
      transition-all duration-500 z-20 
    ${!aff && ' hidden' }`}
    onClick={()=> setaff(false)}
  >
      {
                            [...Services].map(
                                (item,i)=>(
                        <Link to={`/services/${item.replace(/[\s/]+/g, '-').toLowerCase()}`} key={i} 
                        onClick={()=>setOpen(false)}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">{item}</li></Link>

                                )
                            )
                        }
 </ul>

</div>

        </nav>

        <div className='flex items-center justify-center lg:flex hidden md:flex'>
           <LanguageSwitcher />
          <SearchBar />
         
        </div>
        {/* mobile version */}
        <div className='flex items-center justify-center lg:hidden md:hidden z-50'>
           <SearchBar />
           <LanguageSwitcher />
          
         
        </div>
      </header>
    </>
  )
}

export default Header
