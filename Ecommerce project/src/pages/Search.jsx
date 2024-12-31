import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useproducts from "../hooks/useproducts";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);


  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query")
  

  const{ products,isLoading, error } = useproducts();
  

  return (
    <div className={`container-x transition-colors duration-300 ${darkMode ?"bg-slate-900":""}`}>
     

      {products === null ? "Loading...." : null}

      <div className="flex flex-wrap justify-center gap-4">
        {searchKaResult.length === 0 ? "product not found" : ""}

        {searchKaResult?.map((item) => (
          <ProductCard
            darkMode={darkMode}
            id={item.id}
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}