import React, {createContext, useEffect, useState} from 'react'
import { Cards, Order, Product, PropsType, ShoppingCartContextType } from '../interface'
import generateFakeProducts from '../utils'

export const ShoppingCartContext = createContext<ShoppingCartContextType|undefined>(undefined)

export const ShoppingCartProvider:React.FC<PropsType> = ({children})=>{

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
  
  const addProductsToCart = (event: React.MouseEvent<HTMLDivElement>,id:number, price:number, title:string, image:string, category:string,description:string) =>{
    event.stopPropagation()
    OpenCheckoutSideMenu()
    setCartProduct([...cartProduct, {id, price, title, image, category,description}])
  }

  const handleDelete = (id:number) =>{
    const filteredProducts = cartProduct.filter(product=> product.id != id)
    setCartProduct(filteredProducts)
  }

  const totalPrice = parseInt(cartProduct.reduce((x,product)=> product.price != undefined? x + product.price:x,0).toFixed(2))
  const totalCart = cartProduct.length

  const [order, setOrder]=useState<Partial<Order>[]>([])

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months in JavaScript are 0-indexed, so we add 1
  const day = currentDate.getDate();
  const formattedDate = `${day}/${month}/${year}`;

  const handleCheckout = () =>{
    const orderToAdd ={
      date:formattedDate,
      products:cartProduct,
      totalProducts:totalCart,
      totalPriceCart: totalPrice
    }
    setOrder([...order, orderToAdd])
    setCartProduct([]);
    CloseCheckoutSideMenu()
    setSearchTitleItems('')
  }







    // CheckoutSideMenu. open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false)
    const OpenCheckoutSideMenu:()=>void = () => setIsCheckoutSideMenuOpen(true);
    const CloseCheckoutSideMenu:()=>void = () => setIsCheckoutSideMenuOpen(false);











    //get products . get products by title
    const fakeProducts = generateFakeProducts(50);
    const [items, setItems] = useState<Product[]>(fakeProducts)
    // useEffect(()=>{
    //   fetch('https://api.escuelajs.co/api/v1/products')
    //   .then(response => response.json())
    //   .then(data => setItems(data))
      
    // },[])
    const [filteredItems, setFilteredItems] = useState<Product[]| undefined>(fakeProducts)
    const [searchTitleItems, setSearchTitleItems] = useState<Product[]|string>('')
    const filteredItemsByTitle = (items: Product[], searchTitleItems: string | Product[]): Product[] => {
      const searchTitleString = typeof searchTitleItems === 'string' ? searchTitleItems : '';
    
      return items?.filter(item => item.title.toLowerCase().includes(searchTitleString.toLowerCase()));
    };
    
    // useEffect(()=>{
    //   if (searchTitleItems)  setFilteredItems(filteredItemsByTitle(items,searchTitleItems))
      
    // },[items,searchTitleItems])

    const [searchItemsCategory, setSearchItemsCategory] = useState<Product[]|string>('')
    
    const filteredItemsByCategory = (items: Product[], searchCategoryItems: string | Product[]): Product[] => {
      const searchCategoryString = typeof searchCategoryItems === 'string' ? searchCategoryItems : '';
      return items?.filter(item => item.category.name.toLowerCase().includes(searchCategoryString.toLowerCase()));
    };
    
    
    useEffect(()=>{
    const filterBy=(searchType:string|null,items:Product[], searchTitleItems:string | Product[], searchItemsCategory:string| Product[])=>{
      if (searchType === 'BY_TITLE')return filteredItemsByTitle(items, searchTitleItems)
      if (searchType === 'BY_CATEGORY') return filteredItemsByCategory(items, searchItemsCategory)
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        const filteredByCategory = filteredItemsByCategory(items, searchItemsCategory);
        return filteredByCategory.filter(item => {
          if (typeof searchTitleItems === 'string') {
            return item.title.toLowerCase().includes(searchTitleItems.toLowerCase());
          }
          return false;
        });
      }
      
      if (!searchType) return items
    }

      if (searchTitleItems && searchItemsCategory)  setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchTitleItems,searchItemsCategory))
      if (searchTitleItems && !searchItemsCategory)  setFilteredItems(filterBy('BY_TITLE',items,searchTitleItems,searchItemsCategory))
      if (searchItemsCategory && !searchTitleItems )  setFilteredItems(filterBy('BY_CATEGORY',items,searchTitleItems,searchItemsCategory))
      if (!searchItemsCategory && !searchTitleItems )  setFilteredItems(filterBy(null,items,searchTitleItems,searchItemsCategory))
      // return()=>setSearchTitleItems(null)
    },[items, searchTitleItems, searchItemsCategory])



    



    //mobile menu
    const[openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)





    //button in my-order
    const[checkoutCart, setCheckoutCart] = useState<boolean>(false)



    
    //button in my-order. view modal
    const[successfulPurchase, setSuccessfulPurchase] = useState<boolean>(false)
    const msgVisible: () => void = ()=>{
      setSuccessfulPurchase(true)
      setTimeout(()=>{ 
        setSuccessfulPurchase(false);
      },1500)
      setCheckoutCart(false)
    }









  return(
    <ShoppingCartContext.Provider value={{
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
      CloseCheckoutSideMenu,
      handleDelete,
      totalPrice,
      totalCart,
      order,
      setOrder,
      handleCheckout,
      items,
      setItems,
      searchTitleItems, 
      setSearchTitleItems,
      filteredItemsByTitle,
      filteredItems,
      searchItemsCategory, 
      setSearchItemsCategory,
      openMobileMenu,
      setOpenMobileMenu,
      checkoutCart, 
      setCheckoutCart,
      successfulPurchase, 
      msgVisible
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}