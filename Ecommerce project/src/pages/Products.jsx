import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);

    setProducts(response?.data?.products);
  };

  // useEffect ak bar call hoga (in this case)
  useEffect(() => {
    getProductData();
  }, []);

  // console.log("products ", products);

  const [searchTerm,setsearchTerm] = useState (" ")

  console.log(searchTerm)

  const searchProducts = ()=>{
  const result =  products?.filter=((item)=>{
    return item.price > 50;
    });
    console.log("result",result);
    return result  || []
    
  };
  const searchkaResult = searchProducts();

  return (
    <div className="container-x">

      <input 
      type="search" 
      name="price" id="price" 
      onChange={(event)=>{

      // console.log("value",event.target.value,);

      setsearchTerm(event.target.value)
      

      }}
      className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6" 
      placeholder="Search your product"
      />


      {products === null ? "Loading...." : null}

      <div className="flex flex-wrap justify-center gap-4">
        {searchkaResult?.map((item) => (
          <ProductCard 
          key={item.id} 
          image={item.thumbnail} 
          name={item.title}
          price={item.price} 
          discountPercentage={item.discountPercentage}
          rating={item.rating}/>
        ))}
      </div>
    </div> 
  );
}