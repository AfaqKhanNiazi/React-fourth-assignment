import Button from "../components/Button";
import Sectiontitle from "../components/Sectiontitle";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import NewArrivalGrid from "../components/NewArrivalGrid";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function home() {
  return (
    <div className="container-x">
    <Sectiontitle text="Today's"/>
    <h3 className="heading">Flash Sales</h3>

    <Slider></Slider>

    <Link to={'/products'} className="font-medium rounded-xl bg-primary center text-white h-14 w-56 mx-auto my-16"> View All Products </Link>
    
    <Sectiontitle text="Categories"/>

    <h3 className="heading">Browse By Category</h3>
    {/* todo */}
    <Sectiontitle text="This Month"/>

    <div className="flex justify-between mb-16">
    <h3 className="heading">Best Selling Products</h3>
    <Button className="h-14 w-40">View All</Button>

    </div>
<div className="flex gap-7">
  
  <ProductCard/>
  <ProductCard/> 
  <ProductCard/>
  <ProductCard/>

</div>

    <Sectiontitle text="Our Products"/>
    <Sectiontitle text="Featured"/>

    <h3 className="heading">New Arrival</h3>

    <NewArrivalGrid/>
    <a href="#top" className="my-5 w-12 h-12 bg-gray-200 rounded-full bdr block center text-2xl ml-auto">
    <FaArrowUp />
    </a>
    </div>
  );
}
