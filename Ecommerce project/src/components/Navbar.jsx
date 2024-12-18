import { BsFillMoonFill } from "react-icons/bs";
import { AiOutlineSun } from "react-icons/ai";
import logo from "../assets/logo/logo.svg";
import logoMobile from "../assets/logo/logo-mobile.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];

export default function Navbar() {

  const[darkMode,setdarkmode]=useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";

    console.log("uper wala darkmode",darkMode);
    

  return (
    <div id="top" className={`container-x ${ darkMode ? "bg-slate-900" : ""
    } h-28 transition-colors duration-300 relative flex justify-between items-center`}
    >
      <img src={logoMobile} alt="" width={60} height={60} />

      <div className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>
{/* destop nevbar */}
      <ul className={`hidden md:flex gap-3 ${darkMode?"text-white":""}`}>
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}

        {!isLoggedIn ? <li className={navLinkStyle}>
        <Link to="login">login</Link>
          </li>:null}
      </ul>

      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-4xl"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {isHamburgerOpen && (
        // mobile navbar
        <ul  className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
        <Link onClick={()=>setIsHamburgerOpen(false)}to={item.link}>{item.title}</Link>            
            </li>
          ))}

      {!isLoggedIn ? <li className={navLinkStyle}>
        <Link onClick={()=>setIsHamburgerOpen(false)}to="login">login</Link>
          </li>:null}
      </ul>
    )}

      <div className="icons center text-2xl gap-3">
      
      
<button onClick={()=>{
  setdarkmode(!darkMode);
}} className={`${darkMode ? "text-white" : ""} transition duration-300`}>
  {darkMode ? <AiOutlineSun /> : <BsFillMoonFill />}
  </button>

        {isLoggedIn ? (
          <>
            <IoMdHeart className="" />
            <IoCart />
          </>
        ) : null}

        <Link to={"/profile"} className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white">
          {isLoggedIn ? (
            <img
              src="https://avatars.githubusercontent.com/u/182785779?s=96&v=4"
              alt=""
            />
          ) : (
            <FaRegUser />
          )}
        </Link>
      </div>
    </div>
  );
}