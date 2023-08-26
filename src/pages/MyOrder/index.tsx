import { useContext } from "react";
import { OrderCard } from "../../components/OrderCard";
import Layout from "../../components/layout";
import { ShoppingCartContext } from "../../context";
import { ShoppingCartContextType } from "../../interface";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function MyOrder():JSX.Element {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType
  const currentPath = window.location.pathname
  let index:number|string = currentPath.slice(currentPath.lastIndexOf('/')+1)
  if (index === 'last') {
    index = context.order?.length -1
  }
  
  return (
    <Layout>
      <div className=" w-full relative">
        <Link to='/my-orders' className=" absolute left-5">
          <ChevronLeftIcon className=" cursor-pointer text-black h-6 w-6"/>
        </Link>
        <h1 className=" text-center text-lg font-semibold">My Order</h1>
      </div>
      <div className="w-96 bg-gray-200 p-3 rounded-lg">
      {
        context.order && context.order.length > 0 ? 		 
        context.order[index].products.map(product =>{
          return <OrderCard
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
          handleDelete={false}
          />
        }):""
        
      }
      </div>
    </Layout>
  )
}
