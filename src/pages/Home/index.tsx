import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Card from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

export default function Home():JSX.Element {

  const [items, setItems] = useState<string[]>([])

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
    
  },[])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item) =>{
            return <Card 
                    key={item.id} 
                    price={item.price}
                    title={item.title}
                    image={item.images[0]}
                    category={item.category.name}     
                    description={item.description}     
                  />
          })
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}
