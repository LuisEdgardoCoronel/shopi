import React, {createContext, useState} from 'react'
import { Cards, PropsType, ShoppingCartContextType } from '../interface'

export const ShoppingCartContext = createContext<ShoppingCartContextType|undefined>(undefined)

export const ShoppingCartProvider:React.FC<PropsType> = ({children})=>{
  //incrementar shopping cart
  const [count, setCount] = useState<number>(0)

  // product detail. open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)
  const toggleProductDetail:()=>void = () => setIsProductDetailOpen(!isProductDetailOpen);


  //rellenar product detail
  const [productToShow, setProductToShow] = useState<Partial<Cards>>({
    key:0,
    price:0,
    title:'',
    image:'',
    category:'',
    description: '',
  })

  const showProduct  = (price:number, title:string, image:string, category:string,description:string) =>{
    toggleProductDetail()
    setProductToShow({price, title, image, category,description})
  }



  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      toggleProductDetail,
      isProductDetailOpen,
      setIsProductDetailOpen,
      productToShow,
      setProductToShow,
      showProduct,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}