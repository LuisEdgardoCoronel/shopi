import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Cards, ShoppingCartContextType} from "../../interface";




const Card:React.FC<Cards> = ({price, title, image, category, description}) => {

  const context = useContext(ShoppingCartContext )as ShoppingCartContextType

  

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg  shadow-md" 
      onClick={()=>context.showProduct(price, title, image, category,description)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {category}
        </span>
        <img 
          src={image}
          alt={title}       
          className="object-cover w-full h-full rounded-lg"
        />
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-0.5 text-lg"
          onClick={()=> context.setCount(context.count + 1)}
        >
          <PlusIcon className=" w-full text-black"/>
        </div>
      </figure>
      <p className="flex justify-between mx-2">
        <span className="text-sm">{title}</span>
        <span className="text-lg font-medium">{`$${price}`}</span>
      </p>
    </div>
  )
}

export default Card
