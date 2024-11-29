import axios from "axios";
import { useState } from "react";
import ProductCard from "../components/ProductCard"

export default function Products() {
    const API_KEY = 'https://dummyjson.com/products'

    const [products,setproducts] = useState(null);


    const getProductData = async () =>{
    const response = await axios (API_KEY);
    
    // console.log("response", response.data.products);

    setproducts (response?.data?.products)

    useEffect(()=>{
      
      getProductData();
    },[])
  };


  console.log("products", products);
  

  return (
  <div>
    
    {Products === null ? "Loading...." : null}

    
    
    <div className="flex flex-wrap gap-4">
    {products?.map((item)=>(
    <ProductCard key={item.id} images={item.thumnail}/>
    ))}

    </div>
    </div>
  )
}
