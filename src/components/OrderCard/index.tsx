import { XCircleIcon } from "@heroicons/react/24/solid"
import { Cards, ShoppingCartContextType } from "../../interface"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context"


export const OrderCard:React.FC<Partial<Cards>>  = ({id,price, title, image}) => {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType

  
  return (
    <div className="flex justify-between items-center px-1 mb-3 w-full box-border">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
        </figure>
        <p className="text-sm font-light w-36">{title}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="text-lg font-medium">$ {price}</p>
        <XCircleIcon 
          className=" w-7 cursor-pointer text-red-600 "
          onClick={()=>context.handleDelete(id)}
          />
      </div>
    </div>
  )
}
