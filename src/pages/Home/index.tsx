// import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Card from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/index.tsx";
import { ShoppingCartContextType } from "../../interface/index.tsx";





export default function Home():JSX.Element {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType

  // searchItemsCategory
  


  const renderView = ()=>{
      if (context.filteredItems?.length > 0) {
        return(
          context.filteredItems?.map((item) => (<Card 
            key={item.id} 
            id={item.id}
            price={item.price}
            title={item.title}
            image={item.images[0]}
            category={item.category.name}     
            description={item.description}     
          />)
          )
        )
      } else {
        return(
          <div>No se encontraron coincidencias</div>
        )
      }
    } 
  














  return (
    <Layout>
      <div className=" w-full relative mb-4">
        <h1 className=" text-center text-lg font-semibold">Productos Exclusivos</h1>
      </div>

      { 
      context.successfulPurchase ===true? <div className="absolute bg-white p-5 rounded-lg border-2 border-green-500">
        <p className=" text-green-500 font-semibold">Compra Exitosa!</p>
      </div>
      :""
      }

      <input 
      type="text" 
      placeholder="Buscar productos" 
      className=" p-4 mb-4 rounded-lg text-center border focus:outline-none w-80 "
      onChange={(event)=>context.setSearchTitleItems(event.target.value)}/>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg max-lg:grid-cols-3 max-lg:gap-y-8 place-items-center max-sm:grid-cols-2">
        {
          renderView()
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}
