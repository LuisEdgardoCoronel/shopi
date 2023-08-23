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

  //shopping cart . add products
  const [cartProduct, setCartProduct] = useState<Partial<Cards>[]>([])

  const addProductsToCart = (event: React.MouseEvent<HTMLDivElement>, price:number, title:string, image:string, category:string,description:string) =>{
    event.stopPropagation()
    setCount(count + 1)
    OpenCheckoutSideMenu()
    setCartProduct([...cartProduct, {price, title, image, category,description}])
  }


    // product detail. open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false)
    const OpenCheckoutSideMenu:()=>void = () => setIsCheckoutSideMenuOpen(true);
    const CloseCheckoutSideMenu:()=>void = () => setIsCheckoutSideMenuOpen(false);


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
      cartProduct, 
      setCartProduct,
      addProductsToCart,
      isCheckoutSideMenuOpen, 
      setIsCheckoutSideMenuOpen,
      OpenCheckoutSideMenu,
      CloseCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}