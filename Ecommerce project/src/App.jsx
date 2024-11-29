import Banner from "./components/banner"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import About from "./pages/About"
import Login from "./pages/login"
import { Routes, Route, Outlet, Link, Navigate} from "react-router-dom";
import Footer from "./components/Footer"
import Products from "./pages/Products"

// import { FcAbout } from "react-icons/fc";
// import { DiVim } from "react-icons/di";
// import Contact from "./pages/Contact";


function App() {
const isLoggedIn = false;

  return (
    <>
    <Banner/>
    <Navbar/>

    
  <Routes>
  <Route path="/" index element={<Home />}/>
  <Route path="/about"element={<About/>}/>
  <Route path="/not-found"element={<div>not founddd</div>}/>
  <Route path="/products"element={<Products/>}/>


  
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
