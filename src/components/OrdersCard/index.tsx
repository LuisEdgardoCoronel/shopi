// import { XCircleIcon } from "@heroicons/react/24/solid"
import { CalendarDaysIcon, ChevronRightIcon, CurrencyDollarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import { Order } from "../../interface"
// import { useContext } from "react"
// import { ShoppingCartContext } from "../../context"


export const OrdersCard:React.FC<Order>  = ({totalPriceCart, totalProducts, date }) => {

  // const context = useContext(ShoppingCartContext ) as ShoppingCartContextType

  
  return (
    <div className="flex justify-between items-center p-4 mb-3 w-full box-border border-black rounded-lg border-2 bg-gray-200">
      <p className="flex w-80 text-sm justify-between items-center">
        <span><CalendarDaysIcon className=" inline w-6 h-6"/> {date}</span>
        <span><ShoppingBagIcon className=" inline w-6 h-6"/> {totalProducts} Products</span>
        <span><CurrencyDollarIcon className=" inline w-6 h-6"/> {totalPriceCart}</span>
        <ChevronRightIcon className=" inline w-6 h-6"/>
      </p>
    </div>
  )
}
