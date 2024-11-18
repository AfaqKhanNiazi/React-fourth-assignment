import Banner from "./components/banner"
import Navbar from "./components/Navbar"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/About"
import Login from "./pages/login"


import { FcAbout } from "react-icons/fc";
import { DiVim } from "react-icons/di";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
    <Banner/>
    <Navbar/>
   <Routes>
   <Route path="/" index element={<Home />}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/contact" element={<Contact/>}/>


   </Routes>
      
    </>
  )
}

export default App
