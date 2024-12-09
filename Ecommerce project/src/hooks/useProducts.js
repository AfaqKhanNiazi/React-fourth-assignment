import { useEffect, useState } from "react";
import axios from "axios";

export default function useproducts(query) {
    
    const API_KEY = `https://dummyjson.com/products?${query}`;

    const [products, setProducts] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
  
    const getProductData = async () => {
      
      try{
        setError(null);
        setIsLoading(true)
      const response = await axios(API_KEY);
  
      setProducts(response?.data?.products);
      setIsLoading(false)
    
      }catch(error) {
        setError(error?.response?.statusText||"unknow error ,please try again")
      }finally{
        setIsLoading(false)
      }
    
    };
  
    // useEffect ak bar call hoga (in this case)
    useEffect(() => {
      getProductData();
    }, []);

    return{
        products : products,  
        isLoading: isLoading,
        error: error,
    }
  
}
