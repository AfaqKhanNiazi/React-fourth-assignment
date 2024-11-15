import logo from "../assets/logo/logo.svg"
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <div className="h-28 bdr flex justify-around items-center">
    <img src={logo} alt="" />
    <div className="w-60 h-10 px-2 rounded center bg-[F5F5F5]">
        <input type="search" className="outline-none with w-full text-sm bg-transparent" placeholder="What are you looking for?"/>
        <CiSearch className="text-3xl"/>

    </div>
    </div>
  )
}
