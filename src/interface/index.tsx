import { ReactNode } from 'react';


export interface PropsType {
  children: ReactNode;
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










export interface ShoppingCartContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  toggleProductDetail:()=>void;
  isProductDetailOpen:boolean
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
  totalPrice:number
  totalCart:number
}