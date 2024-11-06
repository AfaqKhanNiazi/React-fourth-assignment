import img from "../assets/images/game.png";

export default function ProductCard(){
    return(
        <div className="border-2 border-red-500 w-64 h-[350px]">
            <img src={img} alt="Product img" />
            <h3>HAVIT HV-G92 Gamepad</h3>
            <p>
            <span>$120</span>
            <span>$160</span>
            </p>
        
            </div>  
    )
}