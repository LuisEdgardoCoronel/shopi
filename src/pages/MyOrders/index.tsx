import { useContext } from "react";
import Layout from "../../components/layout";
import  {OrdersCard}  from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../context";
import { ShoppingCartContextType } from "../../interface";
import { Link } from "react-router-dom";

export default function MyOrders():JSX.Element {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType

  console.log(context.order)

  return (
    <Layout>
      <div className=" w-full relative">
        <h1 className=" text-center text-lg font-semibold">My Orders</h1>
      </div>
      {
        context.order.map((order, index)=>{
        return <Link key={index} to={`/my-orders/${index}`}>
                  <OrdersCard 
                  totalPriceCart={order.totalPriceCart}
                  totalProducts={order.totalProducts}
                  date={order.date}
                  // products={order.products}
                  />
                </Link>
        })}
    </Layout>
  )
}
