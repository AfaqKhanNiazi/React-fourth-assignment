import img from "../assets/images/game.png";
import ReactStars from 'react-stars'

export default function ProductCard(props){

    const discountPrice =
    (props.price - props.discountPercentage * (props.price / 100 )).toFixed(2);
    
    
    return(
        <div className="group p-3 drop-shadow-md border-2 flex gap-4 flex-col relative bg-[F5F5F5] w-64 main-h-[350px]">
            <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text text-white">-40%</div>
            <div className="bdr">
            <img src={props.image} 
            alt="Product img" 
            className="m-auto group-hover:scale-110 transition-all duration-300 " /> 
            </div>
            <div>
            <h3 className="font-medium group-hover:text-primary transition-all duration-300">HAVIT HV-G92 Gamepad</h3>
            <p className="font-medium">
            <span className="text-primary">${discountPrice}</span>{" "}
            <span className="text-gray-400 line-through">${props.price}</span>
            </p>
            
            <div>
            <ReactStars
            count={5}
            value={props.rating}
            //   onChange={ratingChanged}
            size={24}
            color2={'#db4444'} 
            edit={false}/>,
                
                
            </div>
            </div>
            </div>  
    )
}