import axios from "axios";
import { use } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import useSWR from 'swr'

export default function ProductDetail() {
  const param = useParams();
  
  const { data, error, isLoading } = useSWR( `https://dummyjson.com/products/${params.id}`, axios);


const product = data?.data;


  const [selectedImage,setlectedImage]=useState(product?.image[0])
  
    return (
    <main>

      <div className="product flex min-h-[600px] flex-col md:flex-row">
        <div className="images flex md:w-[55%] bdr">
          <div className="w-[150px] h-full p-3 flex flex-col gap-3">
            {product?.images.map((image)=>(
              <img src={image} alt="" className="bdr" onClick={()=>setlectedImage(image) } />
            ))}
          </div>
          <div className="">
              
            <img className="w-[500px]" src={selectedImage} alt="" />

          </div>


        </div>
        <div className="product-data md:w-[45%] bdr2">
        </div>

      </div>


    </main>
  )
}
