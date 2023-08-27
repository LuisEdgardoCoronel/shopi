import { ReactNode } from 'react';


export interface PropsType {
  children: ReactNode;
}


export interface OrderCards extends Partial<Cards> {
  handleDelete:boolean;
}




export interface Cards {
  key:number;
  id:number;
  price:number;
  title:string;
  image:string;
  category:string;
  description: string;
}






export interface Order {
  date: string;
  products: Partial<Cards>[];
  totalProducts: number;
  totalPriceCart: number;
}






export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string ;
    image: string;
  };
  images: string[];
}






export interface ShoppingCartContextType {
  toggleProductDetail:()=>void;
  isProductDetailOpen:boolean;
  setIsProductDetailOpen:React.Dispatch<React.SetStateAction<boolean>>;
  productToShow:Partial<Cards>;
  setProductToShow:React.Dispatch<React.SetStateAction<Partial<Cards>>>;
  showProduct:(price: number, title: string, image: string, category: string, description: string) => void;
  cartProduct:Partial<Cards>[];
  setCartProduct:React.Dispatch<React.SetStateAction<Partial<Cards>[]>>;
  addProductsToCart: (event: React.MouseEvent<HTMLDivElement>,id:number,price: number, title: string, image: string, category: string, description: string) => void
  OpenCheckoutSideMenu:()=>void;
  CloseCheckoutSideMenu:()=>void;
  isCheckoutSideMenuOpen:boolean;
  setIsCheckoutSideMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (id: number) => void;
  totalPrice:number;
  totalCart:number;
  order:Partial<Order>[];
  setOrder:React.Dispatch<React.SetStateAction<Partial<Order>[]>>;
  handleCheckout: () => void;
  items:Product[];
  setItems:React.Dispatch<React.SetStateAction<Product[]>>;
  searchTitleItems:Product[]|string|null;
  setSearchTitleItems:React.Dispatch<React.SetStateAction<Product[]|string|null>>;
  filteredItemsByTitle: (items: Product[], searchTitleItems: string) => Product[];
  filteredItems:Product[];
  searchItemsCategory:Product[]|string|null;
  setSearchItemsCategory:React.Dispatch<React.SetStateAction<Product[]|string|null>>;
  openMobileMenu:boolean
  setOpenMobileMenu:React.Dispatch<React.SetStateAction<boolean>>;
}