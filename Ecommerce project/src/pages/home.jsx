import Button from "../components/Button";
import Sectiontitle from "../components/Sectiontitle";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import NewArrivalGrid from "../components/NewArrivalGrid";




export default function home() {
  return (
    <div>
    
    <Sectiontitle text="Today's"/>
    <h3 className="heading">Flash Sales</h3>

    <Slider></Slider>

    <Button className="h-14 w-56 mx-auto my-16"> View All Products </Button>
    
    <Sectiontitle text="Categories"/>

    <h3 className="heading">Browse By Category</h3>
    {/* todo */}
    <Sectiontitle text="This Month"/>

    <div className="flex justify-between mb-16">
    <h3 className="heading">Best Selling Products</h3>
    <Button className="h-14 w-40">View All</Button>

    </div>
<div className="flex gap-7">
  
  <Products/>
  <Products/> 
  <Products/>
  <Products/>

</div>

    <Sectiontitle text="Our Products"/>
    <Sectiontitle text="Featured"/>

    <h3 className="heading">New Arrival</h3>

    <NewArrivalGrid/>

    </div>
  );
}
