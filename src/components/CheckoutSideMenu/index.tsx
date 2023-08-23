import { OrderCard } from "../OrderCard"
import { XCircleIcon } from "@heroicons/react/20/solid"
import { ShoppingCartContext } from "../../context"
import { useContext } from "react"
import { ShoppingCartContextType } from "../../interface"

export const CheckoutSideMenu=():JSX.Element => {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType





  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen?'flex' : 'hidden'} flex-col fixed right-0 bg-white border border-black rounded-lg w-p.d h-p.d top-p.d`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">My order</h2>
        <div >
          <XCircleIcon 
          className=" w-7 cursor-pointer text-red-600 "
          onClick={()=>context.CloseCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className=" px-6 ">
      {
        context.cartProduct.map((product)=>{
          return <OrderCard
          key={product.key}
          title={product.title}
          image={product.image}
          price={product.price}
          />
        })
      }
      </div>
    </aside>
  )
}
