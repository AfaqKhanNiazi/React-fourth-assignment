import img1 from "../assets/images/ps5.png"
import img2 from "../assets/images/baji.png"
import img3 from "../assets/images/speaker.png"
import img4 from "../assets/images/Perfume.png"


export default function NewArrivalGrid() {
  return (
    <div className="main grid grid-cols-4 gap-8 grid-rows-2">

      <div className="bg-[#0D0D0D] rounded col-span-2 row-span-2"><img className="bdr w-full h-full" src={img1} alt="product image"/></div>
      <div style={{backgroundImage:"url('../assets/images/baji.png')"}} className="relative bg-[#0D0D0D] text-gray-200 rounded col-span-2"><img className="bdr w-full h-full" src={img2} alt="product image" />
      <div className="absolute gap-4 bottom-0 p-6">
      <h3 className="font-semibold text-2xl">Women's Collections</h3>
      <p className="w-3/5 line-clamp-3">

        Featured woman collections that give you another vibe.
        
        </p>
      <a className="underline" href="#">Shop Now</a>
      </div>
      </div>
      <div className="bg-[#0D0D0D] rounded"><img className="bdr w-full h-full" src={img3} alt="product image" /></div>
      <div className="bg-[#0D0D0D] rounded"><img className="bdr w-full h-full" src={img4} alt="product image" /></div>
    </div>
  )
}
