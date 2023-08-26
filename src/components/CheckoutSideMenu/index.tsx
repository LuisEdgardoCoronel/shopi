import { OrderCard } from "../OrderCard"
import { XCircleIcon } from "@heroicons/react/20/solid"
import { ShoppingCartContext } from "../../context"
import { useContext } from "react"
import { ShoppingCartContextType } from "../../interface"
import { Link } from "react-router-dom"

export const CheckoutSideMenu=():JSX.Element => {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType
  
  





  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen?'flex' : 'hidden'} flex-col fixed box-border right-0 bg-white border border-black rounded-lg w-p.d max-h-p.d top-p.d`}
    >
      <div className="flex justify-between items-center p-6 bg-gray-100 rounded-t-lg">
        <h2 className="font-medium text-lg">My order</h2>
        <div >
          <XCircleIcon 
          className=" w-7 cursor-pointer text-red-600 "
          onClick={()=>context.CloseCheckoutSideMenu()}
          />
        </div>
      </div>

      <div className=" overflow-y-scroll">
      {
        context.cartProduct.map((product)=>{
          return <OrderCard
          key={product.key}
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
          handleDelete={true}
          />
        })
      }
      </div>

      <div className=" px-6 py-3 w-full  bg-gray-100 rounded-b-lg">
        <div className=" flex justify-between">
          <p className=" inline-block">
            <span className=" text-sm">Productos: </span>
            <span className=" font-medium text-md">{context.totalCart}</span>
          </p>
          <p className=" inline-block">
            <span className=" text-sm">Total: </span>
            <span className=" font-medium text-md">${context.totalPrice}</span>
          </p>
        </div>
        <Link to='/my-orders/last'>
          <button className=" w-full bg-black py-3 text-white rounded-lg" onClick={()=>context.handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}
