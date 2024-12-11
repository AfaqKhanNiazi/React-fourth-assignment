
import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const param = useParams();
  console.log("product",params)
  
    return (
    <div>ProductDetail</div>
  )
}
