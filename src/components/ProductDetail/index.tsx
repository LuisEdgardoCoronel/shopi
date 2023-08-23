import { XCircleIcon } from "@heroicons/react/20/solid"
import { ShoppingCartContext } from "../../context"
import { useContext } from "react"
import { ShoppingCartContextType } from "../../interface"

export const ProductDetail=():JSX.Element => {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType





  return (
    <aside 
    className={`${context.isProductDetailOpen?'flex' : 'hidden'} flex-col fixed right-0 bg-white border border-black rounded-lg w-p.d h-p.d top-p.d`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">details</h2>
        <div >
          <XCircleIcon 
          className=" w-7 cursor-pointer text-red-600 "
          onClick={()=>context.toggleProductDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img 
        src={context.productToShow.image} 
        alt={context.productToShow.title} 
        className="w-full h-full rounded-lg"
        />
      </figure>
      <p className=" flex flex-col p-6">
        <span className=" font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className=" font-medium text-md">{context.productToShow.title}</span>
        <span className=" font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  )
}
