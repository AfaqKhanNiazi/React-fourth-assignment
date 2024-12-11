
import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const param = useParams();
  
  console.log("product", param)
  
    return (
    <div>
        ProductDetail{" "}
        {param.id}
    </div>
  )
}
