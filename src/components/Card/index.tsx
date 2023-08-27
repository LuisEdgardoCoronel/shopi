import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Cards, ShoppingCartContextType} from "../../interface";



const Card:React.FC<Cards> = ({price, title, image, category, description, id}) => {

  const context = useContext(ShoppingCartContext )as ShoppingCartContextType

  const renderIcon =(key:number)=>{
    const isInCart = context.cartProduct.filter(product => product.id === key).length > 0
    if (isInCart) {
      return(
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-green-400 w-6 h-6 rounded-full m-2 p-0.5 text-lg"
        >
          <CheckIcon className=" w-full text-white "/>
        </div>
      )
    } else {
      return(
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-0.5 text-lg"
          onClick={(event)=>context.addProductsToCart(event,key, price, title, image, category,description)}
        >
          <PlusIcon className=" w-full text-green-700"/>
        </div>
      )
    }
  }






  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md max-sm:w-48 " 
      onClick={()=>context.showProduct(price, title, image, category,description)}
    >
      <figure className="relative mb-2 w-full h-4/5 max-sm:h-3/4">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {category}
        </span>
        <img 
          src={image}
          alt={title}       
          className="object-cover w-full h-full rounded-lg"
        />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between mx-2">
        <span className="text-sm">{title}</span>
        <span className="text-lg font-medium">{`$${price}`}</span>
      </p>
    </div>
  )
}

export default Card
