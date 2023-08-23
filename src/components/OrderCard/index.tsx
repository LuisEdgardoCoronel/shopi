import { XCircleIcon } from "@heroicons/react/24/solid"
import { Cards } from "../../interface"


export const OrderCard:React.FC<Partial<Cards>>  = ({price, title, image}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
        </figure>
        <p className="text-sm font-light w-40">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        <XCircleIcon 
          className=" w-7 cursor-pointer text-red-600 "
          />
      </div>
    </div>
  )
}
