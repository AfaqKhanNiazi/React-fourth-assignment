import Banner from "./components/banner"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import About from "./pages/About"
import Login from "./pages/login"
import { Routes, Route, Outlet, Link, Navigate} from "react-router-dom";
import Footer from "./components/Footer"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import { useState } from "react"

// import { FcAbout } from "react-icons/fc";
// import { DiVim } from "react-icons/di";
// import Contact from "./pages/Contact";


function App() {
const isLoggedIn = false;

const[darkMode,setdarkmode]=useState(false);


  return (
    <>
    <Banner/>
    <Navbar darkMode={darkMode} setdarkmode={setdarkmode}/>

    
  <Routes>
  <Route path="/" index element={<Home darkMode={darkMode} />}/>
  <Route path="/about"element={<About darkMode={darkMode} />}/>
  <Route path="/not-found"element={<div>not founddd</div>}/>
  <Route path="/products"element={<Products darkMode={darkMode}/>}/>
  <Route path="/product/:id" element={<ProductDetail />} />
  


  
   {isLoggedIn ? (
   <> 
  <Route path="/profile" element={<div>this is my profile page</div>}
  />

  <Route path="/login"element={<Navigate to="/" />}/>
  <Route path="/*"element={<Navigate to="/not-found" />}/>

   </>
    ) : (
      <>
  <Route path="/login" element={<Login/>}/>
  <Route path="*"element={<Navigate to="/login" />}/>
 
  </>
    )}
   </Routes>
   <Footer/>  
    </>
  )
}

export default App